let obj = {name: 'sup', salary: '50'}

obj['pet'] = 'dog';

let objRecord: Record<string,string> = {'name': 'sup', 'salary' : '50'};

objRecord['pet'] = 'dog;';

let objMap = new Map([
  ['name', 'sup'],
  ['salary', '50']
]);

objMap.set('pet', 'dog');

