(function(global) {

    var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdEMjhCNjI1RjgyMzExRTg4MTUyQjMxRDQyNTFGQzc4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdEMjhCNjI2RjgyMzExRTg4MTUyQjMxRDQyNTFGQzc4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0QyOEI2MjNGODIzMTFFODgxNTJCMzFENDI1MUZDNzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0QyOEI2MjRGODIzMTFFODgxNTJCMzFENDI1MUZDNzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YaVxJAAAAsElEQVR42mL4//8/AxrWAuI+IL4OxD+g+BpUTAtdPTKHDYinAPHf/7gBSG4GEHOiGwDSvPs/8WAvVA/cgKn/SQcg1zIwAgltBgaGi0DMzEAa+AvE+kxAIoUMzQxQPSkgF1wHMjQYyAM3QAb8BDLYyDTgFxMDZQBswD0KDHgIMmAHBQbsAYWBDpBxgcxoNKAkIU2lalKmODMhY20gngDEN4D4FxB/AeIrUDEddPUAAQYAvZ3lXQSMn74AAAAASUVORK5CYII='
    var renderer, scene, camera
    var w = window.innerWidth
    var h = window.innerHeight
    var uniforms
    
    var geometry
    var texture, material
    var gui
    var conf = {
      size: 18.0,
      range: 1,
      amount: 150,
      speed: 0.5,
      time: 0
    }
  
    var obj = {
      init: function() {
        renderer = new THREE.WebGLRenderer({
          antialias: true
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        camera = new THREE.Camera
        scene = new THREE.Scene()
  
        geometry = new THREE.BufferGeometry()
  
        var positions = []
        
        for(var i = 0, l = conf.amount; i < l; i++) {
          positions[i * 3] = Math.random() * w - w / 2
          positions[i * 3 + 1] = i
          positions[i * 3 + 2] = Math.random() * h * 1.5
        }
        geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  
        var vs = document.getElementById('vertexShader').textContent
        var fs = document.getElementById('fragmentShader').textContent
  
        uniforms = {
          u_size: {
            type: 'f',
            value: conf.size
          },
          u_amount: {
            type: 'f',
            value: conf.amount
          },
          u_speed: {
            type: 'f',
            value: conf.speed
          },
          u_time: {
            type: 'f',
            value: conf.time
          },
          u_range: {
            type: 'f',
            value: conf.range
          },
          u_resolution: {
            type: 'vec2',
            value: new THREE.Vector2(w, h)
          },
          u_texture : {
            value: new THREE.TextureLoader().load(img)
          }
        }
        material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: vs,
          fragmentShader: fs,
          transparent: true
        })
  
        var points = new THREE.Points(geometry, material)
        scene.add(points)
  
        document.body.appendChild(renderer.domElement)
        this.render()
        this.createGui()
        this.resize()
        window.addEventListener('resize', this.resize.bind(this))
      },
  
      resize: function() {
        w = window.innerWidth
        h = window.innerHeight
        renderer.setSize(w, h)
      },
  
      createGui: function() {
        gui = new dat.GUI()
        gui.add(conf, 'size', 10.0, 30.0).onChange(function() {
          uniforms.u_size.value = conf.size
        })
        gui.add(conf, 'amount', 100, 500).onChange(function() {
          uniforms.u_amount.value = conf.amount
        })
        gui.add(conf, 'speed', -1, 1)
        gui.add(conf, 'range', 1, 5).onChange(function() {
          uniforms.u_range.value = conf.range
        })
      },
  
      render: function() {
        requestAnimationFrame(this.render.bind(this))
        uniforms.u_time.value += conf.speed * 0.003
        renderer.render(scene, camera)
      }
  
    }
  
    obj.init()
  
  })(window)