export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;
	changeColor: boolean = false;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;

		this.isSpaceDebris();
   }
	
	isSpaceDebris(): boolean {
		if(this.type === "Space Debris"){
			this.changeColor = true;
			return true;
		} else {
			this.changeColor = false;
			return false;
		}
   }

   checkStyleType(): boolean {
	   return true;
   }

}

// TODO 3a: fix isSpaceDebris check
