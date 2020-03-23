var validDesignation = [
  "military",
  "cargo",
  "passenger",
  undefined
];

class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.type =
      (obj.type === validDesignation[0] ||
      obj.type === validDesignation[1] ||
      obj.type === validDesignation[2] ? obj.type : undefined);
    this.maxCrew = 2;
    this.odometer = 0;
    this.fuelCapacity = 10;
    this.fuel = 0;
    this.captain = obj.captain;
    this.cargo = [];
    this.emptyparts === {};
    this.parts = obj.parts;
}
};


module.exports = Ship;
