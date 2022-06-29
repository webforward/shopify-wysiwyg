let importModal, exportModal;

(function ($) {
    hljs.highlightAll();

    const editor = Jodit.make('#wysiwyg', {
        "showCharsCounter": false,
        "showWordsCounter": false,
        "showXPathInStatusbar": false,
        "theme": "default",
        "buttons": "bold, italic, underline, strikethrough, subscript, superscript, link | paragraph | align | ul, ol, indent, outdent | table | hr | undo,redo |"
    });

    importModal = new bootstrap.Modal(document.getElementById("import-modal"), {
        keyboard: false
    });

    exportModal = new bootstrap.Modal(document.getElementById("export-modal"), {
        keyboard: false
    });

    $(".wysiwyg-builder .how-to-use").click(function () {
        $('.instructions').removeClass('d-none');
        window.scrollTo(0, $('.wysiwyg-builder').height()+80);
    });

    $(".wysiwyg-builder .import-modal").click(function () {
        importModal.show();
    });

    $(".import-html").click(function () {
        editor.value = $("#import-modal textarea").val();
        $("#import-modal textarea").val('');
    });

    $(".wysiwyg-builder .export-modal").click(function () {
        $("#export-modal textarea").val(editor.value);
        exportModal.show();
    });

    $(".wysiwyg-builder .clear-wysiwyg").click(function () {
        editor.value = '';
        $("#export-modal textarea").val('');
    });


    //not sure if this will be used...
    // function striptags(html, ...args) {
    //     return html
    //         .replace(/<(\/?)(\w+)[^>]*\/?>/g, (_, endMark, tag) => {
    //             return args.includes(tag) ? "<" + endMark + tag + ">" : "";
    //         })
    //         .replace(/<!--.*?-->/g, "");
    // }
})(jQuery);

