export function row(content, styles = ''){
  return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content){
  return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}){
  if(typeof styles === 'string') return styles
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}


export function TitleHTML(type){
  return `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group">
    <input class="form-control form-control-sm" name="value" placeholder="enter title">
  <div>

  <div class="btn-group input-group-sm" aria-label="First group">
    <input type="radio" class="btn-check" name="tag" id="h1" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="h1">h1</label>

    <input type="radio" class="btn-check" name="tag" id="h2" autocomplete="off">
    <label class="btn btn-outline-primary" for="h2">h2</label>

    <input type="radio" class="btn-check" name="tag" id="h3" autocomplete="off">
    <label class="btn btn-outline-primary" for="h3">h3</label>

    <input type="radio" class="btn-check" name="tag" id="h4" autocomplete="off">
    <label class="btn btn-outline-primary" for="h4">h4</label>

    <input type="radio" class="btn-check" name="tag" id="h5" autocomplete="off">
    <label class="btn btn-outline-primary" for="h5">h5</label>

    <input type="radio" class="btn-check" name="tag" id="h6" autocomplete="off">
    <label class="btn btn-outline-primary" for="h6">h6</label>
  </div>

  <div class="btn-group input-group-sm" aria-label="Second group">
    <span class="input-group-text">text-align:</span>

    <input type="radio" class="btn-check" name="text-align" id="left" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="left">left</label>

    <input type="radio" class="btn-check" name="text-align" id="center" autocomplete="off">
    <label class="btn btn-outline-primary" for="center">center</label>

    <input type="radio" class="btn-check" name="text-align" id="right" autocomplete="off">
    <label class="btn btn-outline-primary" for="right">right</label>
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">font-size:</span>
    <input type="text" class="form-control" placeholder="16" name="font-size">
    <span class="input-group-text">px;</span>
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">color:</span>
    <input data-jscolor="" value="#000" type="text" class="form-control" name="color">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">background:</span>
    <input data-jscolor="" type="text" class="form-control" name="background">
  </div>
<button type="submit" class="btn btn-primary btn-sm">add</button>
</form>
<hr />
  `
}

export function TextHTML(type){
  return `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group">
    <input class="form-control form-control-sm" name="value" placeholder="enter text">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">font-size:</span>
    <input type="text" class="form-control" placeholder="16" name="font-size">
    <span class="input-group-text">px;</span>
  </div>
  
  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">color:</span>
    <input data-jscolor="" value="#000" type="text" class="form-control" name="color">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">background:</span>
    <input data-jscolor="" type="text" class="form-control" name="background">
  </div>
  
  <button type="submit" class="btn btn-primary btn-sm">add</button>
</form>
<hr />
  `
}

export function ColumnsHTML(type){
  return `
  <form name="${type}">
  <h5>${type}</h5>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">Columns 1</span>
    <input class="form-control form-control-sm" name="value1" placeholder="enter text">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">Columns 2</span>
    <input class="form-control form-control-sm" name="value2" placeholder="enter text">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">Columns 3</span>
    <input class="form-control form-control-sm" name="value3" placeholder="enter text">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">Columns 4</span>
    <input class="form-control form-control-sm" name="value4" placeholder="enter text">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">Columns 5</span>
    <input class="form-control form-control-sm" name="value5" placeholder="enter text">
  </div>


  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">font-size:</span>
    <input type="text" class="form-control" placeholder="16" name="font-size">
    <span class="input-group-text">px;</span>
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">color:</span>
    <input data-jscolor="" value="#000" type="text" class="form-control" name="color">
  </div>

  <div class="input-group mb-3 input-group-sm">
    <span class="input-group-text">background:</span>
    <input data-jscolor="" type="text" class="form-control" name="background">
  </div>
  
  <button type="submit" class="btn btn-primary btn-sm">add</button>
</form>
<hr />
  `
}

