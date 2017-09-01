# My grunt build

#### Project structure:  
![alt text](https://github.com/LazloSoot/GruntTemplate/blob/master/Screenshot_2.png  "Project structure")

#### My tasks:
```javascript
    grunt.registerTask('build', ['less', 'autoprefixer', 'postcss', 'csso', 'uglify','imagemin', 'symbols']);
  
    grunt.registerTask('build--watch', ['less', 'autoprefixer', 'postcss', 'csso', 'uglify','imagemin', 'symbols', 'watch']);
    
    grunt.registerTask('symbols', ['svgmin','svgstore']);
  ```
 #### Plagins: 
 ```javascript
"devDependencies": {
    "grunt-cli": "latest",
    "grunt": "latest",
    "grunt-contrib-less": "latest",
    "grunt-postcss": "latest",
    "css-mqpacker": "latest",
    "grunt-autoprefixer": "latest",
    "grunt-contrib-uglify": "latest",
    "grunt-contrib-watch": "latest",
    "grunt-csso": "latest",
    "grunt-contrib-imagemin": "latest",
    "grunt-svgmin": "latest",
    "grunt-svgstore": "latest",
    "load-grunt-tasks": "latest"
  } 
  ```
