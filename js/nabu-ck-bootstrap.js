$.fn.nabuCKEditor = function(options)
{
    if (typeof options === 'string') {
        this.each(function() {

        });
        return false;
    } else {
        return this.each(function() {
            var opts = $.extend({}, $.fn.nabuCKEditor.defaults, options);
            var data = $(this).data();
            opts = $.extend({}, opts, data);
            $(this).ckeditor(opts);
            this.nabuCKEditor = new Nabu.CKEditor.Editor(this, opts);
            if (data['id']) {
                this.nabuCKEditor.setId(data['id']);
            }
        });
    }
}

$.fn.nabuCKEditor.defaults = {

};

function nbBootstrapCKEditors(container)
{
    var editors = $(container).find('[data-toggle="ckeditor"] textarea');
    if (editors.length > 0) {
        nabu.loadLibrary('CK.Editor', function() {
            editors.nabuCKEditor();
        });
    }
}

nabuBootstrap.addLoader(nbBootstrapCKEditors);
