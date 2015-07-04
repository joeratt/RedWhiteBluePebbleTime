var UI = require('ui');
var Vector2 = require('vector2');

var window = new UI.Window();

var dayOfWeek = new UI.TimeText({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
    text: "%A",
    font: 'droid-serif-28-bold',
    color: 'red',
    textAlign: 'center'
});

var timeText = new UI.TimeText({
  position: new Vector2(0, 25),
  size: new Vector2(144, 30),
    text: "%H:%M",
    font: 'roboto-bold-subset-49',
    color: 'white',
    textAlign: 'center'
});

var dateText = new UI.TimeText({
  position: new Vector2(0, 75),
  size: new Vector2(144, 30),
    text: "%d.%b.%Y",
    font: 'gothic-28-bold',
    color: 'cyan',
    textAlign: 'center'
});

window.add(dayOfWeek);
window.add(timeText);
window.add(dateText);

window.show();