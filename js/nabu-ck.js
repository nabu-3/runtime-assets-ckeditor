/* Static load of ckEditor library */
(function() {
    document.write('<script type="text/javascript" src="/runtime/assets/ckeditor/4.6.2/ckeditor.js"></script>');
    document.write('<script type="text/javascript" src="/runtime/assets/ckeditor/4.6.2/adapters/jquery.js"></script>');
    Nabu.LibraryManager.Packages.registerPackage(
        '/runtime/assets/ckeditor/js/lib/',
        ['CK.Editor']
    );
})();
