$(document).ready(function () {
    $('.btn-info').click(function () {
        var $modal = $('#editUserModal').clone().removeAttr('id');
        var $btn = $(this);

        var id = $btn.attr('data-id');
        var username = $btn.attr('data-username');

        $modal.find('#formEditId').val(id);
        $modal.find('#formEditUsername').val(username);

        let currentDate = new Date();
        $modal.find('#formEditUser').attr("id", id+username+currentDate.getTime());
        $modal.find('#formEditSubmitButton').attr("form", id+username+currentDate.getTime());

        $modal.modal('show');
    });
});

$(document).ready(function () {
    $('.btn-danger').click(function () {
        var $modal = $('#deleteUserModal').clone().removeAttr('id');
        var $btn = $(this);

        var id = $btn.attr('data-id');
        var username = $btn.attr('data-username');

        $modal.find('#formDeleteId').val(id);
        $modal.find('#formDeleteUsername').val(username);

        $modal.find('#formDeleteUser').attr("id", id+username+"delete");
        $modal.find('#formDeleteSubmitButton').attr("form", id+username+"delete");

        $modal.modal('show');
    });
});