$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        /* https://commentpicker.com/instagram-user-id.php */
        userId: '6929570380',
        limit: 12,
        resolution: 'standard_resolution',
        /* https://www.instagram.com/accounts/login/?force_authentication=1&only_user_pwd_authentication=1&platform_app_id=&next=/oauth/authorize/%3Fclient_id%3D1677ed07ddd54db0a70f14f9b1435579%26redirect_uri%3Dhttp%3A//instagram.pixelunion.net%26response_type%3Dtoken%26hl%3Den */
        accessToken: '6929570380.....',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});