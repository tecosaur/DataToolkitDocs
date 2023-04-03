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

# --- Edits ---

let multidoc_style_overrides = [
    """
#multi-page-nav {
    width: 100%;
    height: var(--navbar-height);
    z-index: 10;
    padding: 0 1rem;
    position: sticky;
    display: flex;
    top: 0;
    background-color: #282f2f;
    border-bottom: 1px solid #5e6d6f;
}""" => """
#multi-page-nav {
    width: 100%;
    height: var(--navbar-height);
    z-index: 10;
    padding: 0 1rem;
    position: sticky;
    display: flex;
    top: 0;
    background-color: whitesmoke;
    border-bottom: 1px solid #dbdbdb;
}

html.theme--documenter-dark #multi-page-nav {
    background-color: #282f2f;
    border-bottom: 1px solid #5e6d6f;
}""",
    "font-size: 14px;" => "font-size: 1.1em;",
    "\n    text-transform: uppercase;" => "",
    "color: #fff;" => "color: inherit;\n    opacity: 1;",
    "color: #ccc;" => "color: inherit;\n    opacity: 0.75;"
    ]
    multidoc_css_file = joinpath(outpath, "assets", "default", "multidoc.css")
    chmod(multidoc_css_file, 0o664)
    multidoc_style = read(multidoc_css_file, String)
    write(multidoc_css_file, replace(multidoc_style, multidoc_style_overrides...))
end

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
