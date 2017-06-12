try {
    if (!Nabu) throw "Nabu Manager not loaded";
} catch (e) {
    throw "Nabu Manager not loaded";
}

if (typeof Nabu.CKEditor === 'undefined') {
    Nabu.CKEditor = function() {};
}

Nabu.CKEditor.Editor = function(container, config)
{
    this.container = container;
    this.config = config;
    this.events = new Nabu.EventPool();
};

Nabu.CKEditor.Editor.prototype =
{
};

nabu.registerLibrary('CK.Editor', ['Event']);
