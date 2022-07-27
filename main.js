noseX=0;
noseY=0;

function preload()
{
    mustache_1 = loadImage('https://i.postimg.cc/rmQ10PcT/mustache.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded()
{
    console.log(' PoseNet is Inialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw()
{

}

function take_snapshot()
{
    save('myFilterImage.png');
}