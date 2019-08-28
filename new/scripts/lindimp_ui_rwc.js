$(document).ready(function(){
    var motorStatusTopic = new ROSLIB.Topic({
        ros: ros,
        name: "/motor_status",
        messageType: "scitos_msgs/MotorStatus"
    });
    
    motorStatusTopic.subscribe(function(msg){
        var ePressed = msg.emergency_button_pressed;
        if (ePressed){
            $("#EB-alert").show();
        } else {
            $("#EB-alert").hide();
        }
    });
});