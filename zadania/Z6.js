"use strict";
{
    class Point2D {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            //to samo to co powyzej, krotszy zapis
            // private x: number
            // private y: number
            // constructor(x: number, y: number) {
            // 	this.x = x
            // 	this.y = y
            // }
            this.points = () => {
                return console.log(`x=${this.x}, y=${this.y}`);
            };
            //setter
            this.setPoints = (x, y) => {
                this.x = x;
                this.y = y;
            };
        }
        // public static distanceBetween(x1: number, y1: number, x2: number, y2: number) {
        // 	return console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
        // }
        static distanceBetween(px, py) {
            return Math.sqrt(Math.pow(py.getX() - px.getX(), 2) + Math.pow(py.getY() - px.getY(), 2));
        }
        //getter
        getX() {
            return this.x;
        }
        getY() {
            return this.y;
        }
    }
    const P1 = new Point2D(0, 0);
    P1.setPoints(1, 8);
    const P2 = new Point2D(0, 2);
    console.log(Point2D.distanceBetween(P1, P2));
    // Point2D.distanceBetween(P1.getX(), P1.getY(), P2.getX(), P2.getY())
    // console.log(Math.sqrt(Math.pow((5-2),2)+Math.pow((5-2),2)));
}
