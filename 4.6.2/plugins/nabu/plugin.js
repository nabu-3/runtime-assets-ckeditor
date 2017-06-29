CKEDITOR.plugins.add('nabu',  {
    icons: 'css3',
    init: function(editor) {
        editor.addCommand('CSS3', new CKEDITOR.dialogCommand('CSS3Dialog'));
        editor.ui.addButton('CSS3', {
            label: 'Edit CSS3 attributes',
            command: 'CSS3',
            toolbar: 'styles,100'
        });
        CKEDITOR.dialog.add('CSS3Dialog', this.path + 'dialogs/css3dialog.js');
        if (editor.contextMenu) {
            editor.addMenuGroup('CSS3Group');
            editor.addMenuItem('CSS3Edit', {
                label: 'Editar CSS',
                icon: this.path + 'icons/css3.png',
                command: 'CSS3',
                group: 'CSS3Group'
            });
            editor.contextMenu.addListener(function(element) {
                return {
                    CSS3Edit: CKEDITOR.TRISTATE_OFF
                };
            });
        }
    }
});
