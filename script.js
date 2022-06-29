let importModal, exportModal;

(function ($) {

    const editor = Jodit.make('#wysiwyg', {
        height: 500,
        "showCharsCounter": false,
        "showWordsCounter": false,
        "showXPathInStatusbar": false,
        "theme": "default",
        "buttons": "bold, italic, underline, strikethrough, subscript, superscript, link | paragraph | align | ul, ol, indent, outdent | table | hr | undo,redo |"
    });
    editor.value = window.localStorage.getItem('html') ?? '';
    editor.events.on('change', function() {
        window.localStorage.setItem('html', editor.value)
    });

    importModal = new bootstrap.Modal(document.getElementById("import-modal"), {
        keyboard: false
    });

    exportModal = new bootstrap.Modal(document.getElementById("export-modal"), {
        keyboard: false
    });

    $(".wysiwyg-builder .import-modal").click(function () {
        importModal.show();
        $("#import-modal textarea").focus()
    });

    $(".import-html").click(function () {
        editor.value = $("#import-modal textarea").val();
        $("#import-modal textarea").val('');
    });

    $(".wysiwyg-builder .export-modal").click(function () {
        $("#export-modal textarea").val(editor.value);
        exportModal.show();
        $("#export-modal textarea").focus().select();
    });

    $(".wysiwyg-builder .clear-wysiwyg").click(function () {
        editor.value = '';
        $("#export-modal textarea").val('');
    });
})(jQuery);

