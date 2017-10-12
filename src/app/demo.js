define('demo', ['jquery'], function($){

    return {
        addEvents : function(){
            $('#name').on('change', function(){
                $('#messagebox').html(this.value);
            })
        }
    }
})