//Class constructors
class Shape {
    constructor(textLogo, textColor, shapeColor){
        this.textLogo = textLogo;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(textLogo, textColor, shapeColor){
        super(textLogo, textColor, shapeColor)
            // this.slogoShape = logoShape;
        }
        render(){
            console.log(`<circle cx="150" cy="100" r="80" fill=${shapeColor} />`)
    }
}

class Triangle extends Shape {
    constructor(textLogo, textColor, shapeColor){
        super(textLogo, textColor, shapeColor)
            // this.slogoShape = logoShape;
        }
        render(){
            console.log(`'<polygon points="150, 18 244, 182 56, 182" fill=${shapeColor} />'`)
    }
}

class Square extends Shape {
    constructor(textLogo, textColor, shapeColor){
        super(textLogo, textColor, shapeColor)
            // this.slogoShape = logoShape;
        }
        render(){
            console.log(`'<rect x="70" y="20" width="160" height="160" fill=${shapeColor} />'`)
    }
}

const logo = new Circle ("aaa", "black", "circle", "red")
console.log(circle1.render())

// function figure ({ textLogo, textColor, shape, shapeColor }){
//     if(shape === circle){
//         make
//     }
// }


// module.exports = figure