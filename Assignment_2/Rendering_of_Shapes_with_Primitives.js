/*
COMP 370 assignment #1: Many shapes and colours
Thomas Williamson
id: 588206
2021/09/22

*/

"use strict";
//load variables
var gl;
var cross;
var letter;
var circle
var program;
var program2;
var program3
var cr_vPosition;
var l_vPosition;
var ci_vPosition;
var crBuffer;
var lBuffer;
var ciBuffer
var CR_cBuffer;
var l_cBuffer;
var ci_cBuffer
var color = 1
var shape = 1; //1:(input c) cross, 2:(input l) letter "l", 3: (input r) circle, 
var colorCR = [1,0,0, 1,0,0, 1,0,0, 1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0];
var colorL = [1,0,0, 1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0];
var colorC = [1,0,0, 1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0,
                1,0,0, 1,0,0, 1,0,0, 1,0,0, 1,0,0]
var CR_ColorLoc;
var s_ColorLoc;
var ci_ColorLoc;


window.onload = function init()
{
    //load canvas
    var canvas = document.getElementById( "gl-canvas" );

    gl = canvas.getContext('webgl2');
    if (!gl) { alert( "WebGL 2.0 isn't available" ); }

    //set shape geometries
    cross = new Float32Array([
        0,0,
        -.5, -1 ,
         .5,  -1 ,
         .5, -.5,
         1, -.5,
         1, .5,
         .5, .5,
         .5, 1, 
         -.5, 1,
         -.5, .5,
         -1, .5,
         -1, -.5,
         -.5, -.5,
         -.5, -1
    ]);

    letter = new Float32Array([
        -.25,1,
        .25,1,
        0,.5,
        1,-1,
        .5,-1,
        .25,-.5,
        .2,0,
        -.25,-.5,
        -.2,0,
        -1,-1,
         -.5,-1,
         -.25,1,
         0, .5
    ]);

        //python code used to obtain verticies
        //     import math
        // print("{")
        // for i in range(90):
        //     if (i%3) == 0:
        //         #print(i)
        //         x = round((math.cos(i*math.pi/180)*1),2)
        //         y = round((math.sin(i*math.pi/180)*1),2)
        //         print(str(x) + ", " + str(y) + ", ")
        // for i in range(90):
        //     if (i%3) == 0:
        //         x = round(-(math.cos((90-i)*math.pi/180)*1),2)
        //         y = round((math.sin((90-i)*math.pi/180)*1),2)
        //         print(str(x) + ", " + str(y) + ", ")
        // for i in range(90):
        //     if (i%3) == 0:
        //         x = round(-(math.cos(i*math.pi/180)*1),2)
        //         y = round(-(math.sin(i*math.pi/180)*1),2)
        //         print(str(x) + ", " + str(y) + ", ")
        // for i in range(90):
            
        //     if (i%3) == 0:
        //         x = round((math.cos((90-i)*math.pi/180)*1),2)
        //         y = round(-(math.sin((90-i)*math.pi/180)*1),2)
        //         print(str(x) + ", " + str(y) + ", ")
    circle = new Float32Array([
        0, 0, 1.0, 0.0, 1.0, 0.05, 
        0.99, 0.1, 0.99, 0.16, 
        0.98, 0.21, 0.97, 0.26, 
        0.95, 0.31, 0.93, 0.36, 
        0.91, 0.41, 0.89, 0.45, 
        0.87, 0.5, 0.84, 0.54, 
        0.81, 0.59, 0.78, 0.63, 
        0.74, 0.67, 0.71, 0.71, 
        0.67, 0.74, 0.63, 0.78, 
        0.59, 0.81, 0.54, 0.84, 
        0.5, 0.87, 0.45, 0.89, 
        0.41, 0.91, 0.36, 0.93, 
        0.31, 0.95, 0.26, 0.97, 
        0.21, 0.98, 0.16, 0.99, 
        0.1, 0.99, 0.05, 1.0, 
        -0.0, 1.0, -0.05, 1.0, 
        -0.1, 0.99, -0.16, 0.99, 
        -0.21, 0.98, -0.26, 0.97, 
        -0.31, 0.95, -0.36, 0.93, 
        -0.41, 0.91, -0.45, 0.89, 
        -0.5, 0.87, -0.54, 0.84, 
        -0.59, 0.81, -0.63, 0.78, 
        -0.67, 0.74, -0.71, 0.71, 
        -0.74, 0.67, -0.78, 0.63, 
        -0.81, 0.59, -0.84, 0.54, 
        -0.87, 0.5, -0.89, 0.45, 
        -0.91, 0.41, -0.93, 0.36, 
        -0.95, 0.31, -0.97, 0.26, 
        -0.98, 0.21, -0.99, 0.16, 
        -0.99, 0.1, -1.0, 0.05, 
        -1.0, -0.0, -1.0, -0.05, 
        -0.99, -0.1, -0.99, -0.16, 
        -0.98, -0.21, -0.97, -0.26, 
        -0.95, -0.31, -0.93, -0.36, 
        -0.91, -0.41, -0.89, -0.45, 
        -0.87, -0.5, -0.84, -0.54, 
        -0.81, -0.59, -0.78, -0.63, 
        -0.74, -0.67, -0.71, -0.71, 
        -0.67, -0.74, -0.63, -0.78, 
        -0.59, -0.81, -0.54, -0.84, 
        -0.5, -0.87, -0.45, -0.89, 
        -0.41, -0.91, -0.36, -0.93, 
        -0.31, -0.95, -0.26, -0.97, 
        -0.21, -0.98, -0.16, -0.99, 
        -0.1, -0.99, -0.05, -1.0, 
        0.0, -1.0, 0.05, -1.0, 
        0.1, -0.99, 0.16, -0.99, 
        0.21, -0.98, 0.26, -0.97, 
        0.31, -0.95, 0.36, -0.93, 
        0.41, -0.91, 0.45, -0.89, 
        0.5, -0.87, 0.54, -0.84, 
        0.59, -0.81, 0.63, -0.78, 
        0.67, -0.74, 0.71, -0.71, 
        0.74, -0.67, 0.78, -0.63, 
        0.81, -0.59, 0.84, -0.54, 
        0.87, -0.5, 0.89, -0.45, 
        0.91, -0.41, 0.93, -0.36, 
        0.95, -0.31, 0.97, -0.26, 
        0.98, -0.21, 0.99, -0.16, 
        0.99, -0.1, 1.0, -0.05, 1, 0])

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1, 1, 1, 1.0 );
    gl.clear(gl.COLOR_BUFFER_BIT);

//initiate vertex and fragment - shader buffer datta
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    program2 = initShaders( gl, "vertex-shader", "fragment-shader" );
    program3 = initShaders( gl, "vertex-shader", "fragment-shader");

//cross buffer data and render
    crBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, crBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, cross, gl.STATIC_DRAW );

    cr_vPosition = gl.getAttribLocation( program, "aPosition" );
    gl.vertexAttribPointer( cr_vPosition, 2, gl.FLOAT, false, 0, 0 );

    CR_cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, CR_cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorCR), gl.STATIC_DRAW );

    CR_ColorLoc = gl.getAttribLocation( program, "aColor");
    gl.vertexAttribPointer(CR_ColorLoc, 3, gl.FLOAT, false, 0, 0);
    
    gl.useProgram( program );
    gl.enableVertexAttribArray( cr_vPosition );

    gl.enableVertexAttribArray(CR_ColorLoc);

    render();

//letter ...
    lBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, lBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, letter, gl.STATIC_DRAW );
    l_vPosition = gl.getAttribLocation( program2, "aPosition" );
    gl.vertexAttribPointer( l_vPosition, 2, gl.FLOAT, false, 0, 0 );

    l_cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, l_cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorL), gl.STATIC_DRAW );

    s_ColorLoc = gl.getAttribLocation( program2, "aColor");
    gl.vertexAttribPointer(s_ColorLoc, 3, gl.FLOAT, false, 0, 0);

//circle ...
    ciBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, ciBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, circle, gl.STATIC_DRAW );
    ci_vPosition = gl.getAttribLocation( program3, "aPosition" );
    gl.vertexAttribPointer( ci_vPosition, 2, gl.FLOAT, false, 0, 0 );

    ci_cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, ci_cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorC), gl.STATIC_DRAW );

    ci_ColorLoc = gl.getAttribLocation( program3, "aColor");
    gl.vertexAttribPointer(ci_ColorLoc, 3, gl.FLOAT, false, 0, 0);

    window.addEventListener('keydown', this.checkKey);

};


function render() {

    if(shape==1){
        gl.clear( gl.COLOR_BUFFER_BIT );
        gl.drawArrays( gl.TRIANGLE_FAN, 0, 14 );
    }else if(shape==2){
        gl.clear( gl.COLOR_BUFFER_BIT );
        gl.drawArrays( gl.TRIANGLE_STRIP, 0, 13 );
    }else if(shape==3){
        gl.clear( gl.COLOR_BUFFER_BIT );
        gl.drawArrays( gl.TRIANGLE_FAN, 0, 122 );
    }
}

// keyboard input 

function checkKey(e){
    console.log(e.keyCode)
    switch(e.keyCode){
        // input "1" color green
        case 49: 
           colorCR = [0,1,0, 0,1,0, 0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0];
            colorL = [0,1,0, 0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0];
            colorC = [0,1,0, 0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0,
                        0,1,0, 0,1,0, 0,1,0, 0,1,0, 0,1,0];
            if(shape==1){
                cross_Binding();
            }else if(shape==2){
                letter_Binding();
            }else if(shape==3){
                circle_Binding();
            }
            render();
            break

       // input "2" color yellow
        case 50:
            colorCR = [1,1,0, 1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0, 1,1,0, 1,1,0];
            colorL = [1,1,0, 1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0, 1,1,0];
            colorC = [1,1,0, 1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0,
                        1,1,0, 1,1,0, 1,1,0, 1,1,0, 1,1,0];
            if(shape==1){
                cross_Binding();
            }else if(shape==2){
                letter_Binding();
            }else if(shape==3){
                circle_Binding();
            }
            render();
            break


       // input "3" color random
        case 51:
            
            colorCR = [Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(),
             Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random()];
            colorL = [Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(),
             Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random()];
            colorC = [Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(),
             Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), 
Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random(), Math.random(),Math.random(),Math.random()];
            if(shape==1){
                cross_Binding();
            }else if(shape==2){
                letter_Binding();
            }else if(shape==3){
                circle_Binding();
            }
            render();
            break

           
// input "l" letter
        case 76:
            shape = 2;
            letter_Binding();
            render();
            break;

        // input "c"     
        case 67:
            shape = 1;
            cross_Binding();
            render();
            break;    

        // input "r" circle
        case 82:
            shape = 3;
            circle_Binding();
            render();
            break;
    }   
}

//shape data
function cross_Binding(){
    gl.useProgram( program );
    gl.enableVertexAttribArray( cr_vPosition );
    gl.bindBuffer( gl.ARRAY_BUFFER, crBuffer );
    gl.vertexAttribPointer( cr_vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.bindBuffer(gl.ARRAY_BUFFER, CR_cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorCR), gl.STATIC_DRAW );
    CR_ColorLoc = gl.getAttribLocation( program, "aColor");
    gl.vertexAttribPointer(CR_ColorLoc, 3, gl.FLOAT, false, 0, 0);
}

function letter_Binding(){
    gl.useProgram( program2 );
    gl.enableVertexAttribArray( l_vPosition );
    gl.bindBuffer( gl.ARRAY_BUFFER, lBuffer );
    gl.vertexAttribPointer( l_vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.bindBuffer(gl.ARRAY_BUFFER, l_cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorL), gl.STATIC_DRAW );
    s_ColorLoc = gl.getAttribLocation( program2, "aColor");
    gl.vertexAttribPointer(s_ColorLoc, 3, gl.FLOAT, false, 0, 0);
}

function circle_Binding(){
    gl.useProgram( program3 );
    gl.enableVertexAttribArray( ci_vPosition );
    gl.bindBuffer( gl.ARRAY_BUFFER, ciBuffer );
    gl.vertexAttribPointer( ci_vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.bindBuffer(gl.ARRAY_BUFFER, ci_cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorC), gl.STATIC_DRAW );
    ci_ColorLoc = gl.getAttribLocation( program3, "aColor");
    gl.vertexAttribPointer(ci_ColorLoc, 3, gl.FLOAT, false, 0, 0);
}