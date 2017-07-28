// note: key library was modified to enable capture in addEventListener

(function() {
    var idx = 0;
    var select = function(focus) {
        $('h3.r a').css('background-color', 'inherit');
        var link = $('h3.r:nth('+idx+') a');
        link.css('background-color', '#fcc');
        if (focus) {link.focus(); }
        return link;
    };
    key('⌘+return,ctrl+return', function(ev) {
        var link = select();
        window.open(link.attr('href'));
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    });
    key('return', function(ev) {
        var link = select();
        location.href = link.attr('href');
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    });

    var node = null;

    $(function() {
        document.getElementById('main').addEventListener("DOMSubtreeModified", function () {
            var newNode = $('h3.r:nth(0) a');
            if (!node || (node.attr('href') != newNode.attr('href'))) {
                idx = 0;
                select();
                node = newNode;
            }
        });
    });

    key('down', function(ev) {
        if (idx < $('h3.r a').length-1) {
            idx++;
            select(true);
        }
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    });
    key('up', function(ev) {
        if (idx > 0) {
            idx--;
            select(true);
        }
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    });
    key('/', function(ev) {
        $('#gbqfq').focus();
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    });
})();
