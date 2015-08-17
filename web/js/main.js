(function ($) {
    var template = '<tr><td class="index"></td><td class="server_ip"></td><td class="server_status"></td><td class="iemp_status"></td><td class="iemp_version"></td></tr>',
        $tabelDom = $('#server_tabel tbody'),
        data;
    data = getData();

    for(idx in data) {
        var $template = $(template);
        $template.find('.index').text(idx);
        $template.find('.server_ip').text(data[idx].server_ip);
        $template.find('.server_status').text(data[idx].server_status);
        $template.find('.iemp_status').text(data[idx].iemp_status);
        $template.find('.iemp_version').text(data[idx].iemp_version);

        $tabelDom.append($template);
    }
    function getData() {
        var result = {};
        $.ajax({'url': '', async: false, success: function (data) {
            result = data;
        }});
        //TODO remove
        result = [
            {'server_ip': '1.1.1.1', 'server_status': 'good', 'iemp_status': 'running', 'iemp_version': 'v100r001'},
            {'server_ip': '1.1.1.2', 'server_status': 'good', 'iemp_status': 'running', 'iemp_version': 'v100r001'},
            {'server_ip': '1.1.1.3', 'server_status': 'good', 'iemp_status': 'running', 'iemp_version': 'v100r001'},
            {'server_ip': '1.1.1.4', 'server_status': 'good', 'iemp_status': 'running', 'iemp_version': 'v100r001'},
            {'server_ip': '1.1.1.5', 'server_status': 'good', 'iemp_status': 'running', 'iemp_version': 'v100r001'},
            {'server_ip': '1.1.1.6', 'server_status': 'good', 'iemp_status': 'running', 'iemp_version': 'v100r001'}
        ]
        return result;
    }
}(jQuery))