class Application{

  constructor(annotations){
    this.name = annotations['flame.pawelmalak/name'];
    this.url = annotations['flame.pawelmalak/url'];
    this.icon = this.fixIcon(annotations['flame.pawelmalak/icon']);
  }

  fixIcon(icon){
    const formatted = icon.split('-').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join('');
    return `mdi${formatted}`;
  }
}

module.exports = Application;
