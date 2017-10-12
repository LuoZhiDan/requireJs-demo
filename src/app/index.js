require.config({
    baseUrl : '',
    paths : {
        jquery : '../../node_modules/jquery/dist/jquery',
        bootstrap : '../../node_modules/bootstrap/dist/js/bootstrap'
    },
    shim : {
        bootstrap : {
            deps : ['jquery',
               'css!../../node_modules/bootstrap/dist/css/bootstrap.css'
            ]
        }
    }
})


require(['jquery', 'demo'],function ($, demo) {
    $('#btn').on('click',function(){
       $('#messagebox').html('You have access Jquery by using require()');
    });

    demo.addEvents();
});
