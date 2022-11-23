console.log(THREE);

// ¿VAR, LET, CONST?
// Var: Pueden declarar sin necesidad de inicializar | Global
// let: Pueden declarar sin necesidad de inicializar | Lugar
// Const: Declarar con valor
var scene3 = null,    // The composition of diferents elements
    camera3 = null,   // Let me to see
    renderer3 = null, // Let me represent with digital image
    controls3 = null;
    figuresGeo  = [];


var scene2 = null,    // The composition of diferents elements
    camera2 = null,   // Let me to see
    renderer2 = null, // Let me represent with digital image
    controls2 = null; // Can movements


// My principal elements : Scene, Camera, Render, Controls
var scene = null,    // The composition of diferents elements
    camera = null,   // Let me to see
    renderer = null, // Let me represent with digital image
    controls = null; // Can movements


function start() {
    initScene();
    animate();


}

function onWindowResize() {
    camera.aspect = 600 / 580;
    camera.updateProjectionMatrix();
    renderer.setSize((Width = 600), (Height = 580));
}

function initScene() {
    // Scene, Camera, Renderer
    // Create Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xD8FFDB);
    // Create Camera 3D
    camera = new THREE.PerspectiveCamera(20, // FOV (FIELD OF VIEW)
    600 / 580, //(ASPECT)
        0.1, // (NEAR)
        1000);  // (FAR)
    // To Render
    const canvas = document.querySelector('.webgl4');
    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize((Width = 600), (Height = 580));
    document.body.appendChild(renderer.domElement);
    // Add elements
    scene.add(camera);
    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 20, 1);
    controls.update();
    
    window.addEventListener('resize', onWindowResize, false);

    // *************************** Lights ***************************
    const light = new THREE.AmbientLight( 0xffffff,1); // soft white light
    scene.add( light );

    const pointLight = new THREE.PointLight( 0xfff, 1, 100 );
    pointLight.position.set( 0, 30, 0);
    scene.add( pointLight );

    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
    scene.add( pointLightHelper );
    

    createFistModel("src/models/obj/louis/","11742_shoe_v1_L3.mtl","11742_shoe_v1_L3.obj");
    // **************************************************************
}

function createFistModel(generalPath,pathMtl,pathObj) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(generalPath);
    mtlLoader.setPath(generalPath);
    mtlLoader.load(pathMtl, function (materials) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(generalPath);
        objLoader.load(pathObj, function (object) {

            modelLoad = object;
            figuresGeo.push(modelLoad);
            scene.add(object);
            object.scale.set(0.2,0.2,0.2);

            object.position.y = -1.5;
            object.position.x = -0;
            object.position.z = 0;
            object.rotation.x = 300;

        });

    });
}



function animate() {

    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    renderer.render(scene, camera);
}

