class Annotation{

  constructor(annotations){
    this.name = annotations['start.josa.ngo/name'];
    this.url = annotations['start.josa.ngo/url'];
    this.icon = this.fixIcon(annotations['start.josa.ngo/icon']);
  }

  fixIcon(icon){
    const formatted = icon.split('-').map(string => string.charAt(0).toUpperCase() + string.slice(1)).join('');
    return `mdi${formatted}`;
  }
}

module.exports = Annotation;
