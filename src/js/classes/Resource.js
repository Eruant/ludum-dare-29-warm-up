function Resource(type, form, value) {

  if (!type) {
    throw new Error('Resource type must be set');
  }

  if (form) {
    if (form !== "solid" && form !== "liquid" && form !== "gas") {
      throw new Error('Resource form must be "solid", "liquid" or "gas"');
    }
  }

  this.type = type;
  this.form = form || "solid";
  this.value = value || 1;

}

Resource.prototype.setValue = function (value) {
  if (!value) {
    throw new Error('Resource setValue expects a value to be set');
  }

  this.value = value;
};

Resource.prototype.addValue = function (value) {
  this.value += value;
};

Resource.prototype.removeValue = function (value) {

  if (!value) {
    throw new Error('Resource removeValue expects a value to be set');
  }

  if (value <= this.value) {
    this.value -= value;
  } else {
    value = this.value;
    this.value = 0;
  }

  return value;
};

module.exports = Resource;
