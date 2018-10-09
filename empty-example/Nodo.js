function Nodo() {
  this.top = null;
  this.x = -1;
  this.y = -1;

  constructor(px, py) 
  {
    this.x = px;
    this.y = py;
  }

  this.Nodo = function () {
    this.data;
    this.next = null;
  }

  this.push = function (data) {
    if (this.top == null) {
      this.top = new node();
      this.top.data = data;
    } else {
      var temp = new node();
      temp.data = data;
      temp.next = this.top;
      this.top = temp;
    }
  }

  this.pop = function () {
    var temp = this.top;
    var data = this.top.data;
    this.top = this.top.next;
    temp = null;
    return data;
  }
}