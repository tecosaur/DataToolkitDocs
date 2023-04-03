using MultiDocumenter
import MultiDocumenter: MultiDocRef

clonedir = mktempdir()

docs = [
    MultiDocRef(upstream = joinpath(clonedir, "DataToolkit"),
                path = "ref",
                name = "DataToolkit",
                giturl = "https://github.com/tecosaur/DataToolkit.jl.git"),
    MultiDocRef(upstream = joinpath(clonedir, "DataToolkitBase"),
                path = "base",
                name = "Base",
                giturl = "https://github.com/tecosaur/DataToolkitBase.jl.git"),
    MultiDocRef(upstream = joinpath(clonedir, "DataToolkitCommon"),
                path = "common",
                name = "Common",
                giturl = "https://github.com/tecosaur/DataToolkitCommon.jl.git"),
    MultiDocumenter.DropdownNav("Collections", [])
]

outpath = joinpath(@__DIR__, "docs")

MultiDocumenter.make(
    outpath,
    docs;
    search_engine = MultiDocumenter.SearchConfig(
        index_versions = ["stable", "dev"],
        engine = MultiDocumenter.FlexSearch),
    rootpath = "DataToolkitDocs")

# --- Push to gh-pages ---

outbranch = "gh-pages"
has_outbranch = true

if !success(`git checkout --orphan $outbranch`)
    has_outbranch = false
    @info "Creating orphaned branch $outbranch"
    if !success(`git switch --orphan $outbranch`)
        @error "Cannot create new orphaned branch $outbranch."
        exit(1)
    end
end

run(`git add --all`)

if success(`git commit -m 'Aggregate documentation'`)
    @info "Pushing updated documentation."
    run(`git push origin --force $outbranch`)
else
    @info "No changes to aggregated documentation."
end
