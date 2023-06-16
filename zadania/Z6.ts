{
	class Point2D {
		// public static distanceBetween(x1: number, y1: number, x2: number, y2: number) {
		// 	return console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
		// }
		public static distanceBetween(px: Point2D, py: Point2D): number {
			return Math.sqrt(Math.pow(py.getX() - px.getX(), 2) + Math.pow(py.getY() - px.getY(), 2))
		}

		constructor(private x: number, private y: number) {}
		//to samo to co powyzej, krotszy zapis
		// private x: number
		// private y: number
		// constructor(x: number, y: number) {
		// 	this.x = x
		// 	this.y = y
		// }
		public points = () => {
			return console.log(`x=${this.x}, y=${this.y}`)
		}
		//getter
		getX(): number {
			return this.x
		}
		getY(): number {
			return this.y
		}

		//setter
		setPoints = (x: number, y: number): void => {
			this.x = x
			this.y = y
		}
	}

	const P1: Point2D = new Point2D(0, 0)
	P1.setPoints(1, 8)

	const P2: Point2D = new Point2D(0, 2)

	console.log(Point2D.distanceBetween(P1, P2))
	// Point2D.distanceBetween(P1.getX(), P1.getY(), P2.getX(), P2.getY())

	// console.log(Math.sqrt(Math.pow((5-2),2)+Math.pow((5-2),2)));
}
