#!/usr/bin/env node

const blessed = require('blessed')
const fs = require('fs')
const contrib = require('blessed-contrib')
const marked = require('marked')
const TerminalRenderer = require('marked-terminal')
const chalk = require('chalk')


const screen = blessed.screen({
  smartCSR: true
})

const list = blessed.Listbar({items : ["Diary", "Foods", "Recipes", "Settings"]})
screen.append(list)

var box1 = blessed.box({
  parent: screen,
  top: '5%',
  width: '100%',
  height: '45%',
  tags: true,
  style: {
    fg: 'white',
  }
});

var box2 = blessed.box({
  parent: screen,
  top: '50%',
  width: '100%',
  height: '50%',
  tags: true,
  style: {
    fg: 'white',
  }
});

const grid = new contrib.grid({rows: 12, cols: 12, screen: box2})

const energySummary = grid.set(0, 0, 4, 6, contrib.donut, {
    label: 'Highlighted Nutriments',
    radius: 8,
    arcWidth: 3,
    yPadding: 2,
    data: [
      {percent: 80, label: 'Consumed','color':[100,200,170]},
      {percent: 80, label: 'Burned','color':[100,200,170]},
      {percent: 80, label: 'Burned','color':[100,200,170]},
      {percent: 80, label: 'Burned','color':[100,200,170]},
      {percent: 80, label: 'Burned','color':[100,200,170]},
    ]
  })

const energyGauge = grid.set(0, 6, 2, 3, contrib.gauge, {label: 'Energy 0.0 kCal / 2586 kcal (0%)'})
const proteinGauge = grid.set(0, 9, 2, 3, contrib.gauge, {label: 'Protein 0.0 g / 161.6 g (0%)'})
const carbsGauge = grid.set(2, 6, 2, 3, contrib.gauge, {label: 'Carbs 0.0 g / 258 g (0%)'})
const fatGauge = grid.set(2, 9, 2, 3, contrib.gauge, {label: 'Fat 0.0 g / 100 g (0%)'})


var table = contrib.table(
  { keys: true
  , vi: true
  , fg: 'white'
  , selectedFg: 'white'
  , selectedBg: 'blue'
  , interactive: true
  , label: 'Foods'
  , width: '80%'
  , height: '100%'
  , border: {type: "line", fg: "cyan"}
  , columnSpacing: 10
  , columnWidth: [12, 12, 12, 12]
})

box1.append(table)

table.setData(
{ 
  headers: ['Description', 'Amount', 'Unit', 'Energy'],
  data: [ 
    ["Banana", 1, "Medium", 105.2],
    ["Banana", 1, "Medium", 105.2],
    ["Banana", 1, "Medium", 105.2],
  ]
})

// var input = blessed.textarea({ 
// 	bottom: 1,        
// 	height: 3,        
// 	inputOnFocus: true,
// 	padding: {        
// 		top: 1,
// 		left: 2
// 	},
// 	style: {          
// 		fg: '#787878',
// 		bg: '#454545',  
// 		focus: {        
// 			fg: '#f6f6f6',
// 			bg: '#353535' 
// 		}
// 	}
// });

// box3.append(input);

// marked.setOptions({
//   renderer: new TerminalRenderer({
//     paragraph: chalk.dim.gray,
//     firstHeading: chalk.black.underline.bold,
//     heading: chalk.yellow.bold,
//     listitem: chalk.gray,
//   })
// });

// const content = fs.readFileSync('./content/nutrition.md', 'utf8')

// var box = blessed.box({
//   parent: screen,
//   content: marked(content),
//   scrollable: true,
//   alwaysScroll: true,
//   border: {
//     type: 'bg',
//     ch: ' '
//   },
//   style: {
//     bg: '#2F343F',
//     scrollbar: {
//       bg: 'white'
//     }
//   },
//   height: '90%',
//   width: '90%',
//   top: 'center',
//   left: 'center',
//   cwd: process.env.HOME,
//   keys: true,
//   vi: true,
//   scrollbar: {
//     ch: ' '
//   }
// });

// box.focus();

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
})

screen.render()
