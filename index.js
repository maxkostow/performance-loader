module.exports = function (content) {
    this.cacheable()
    var start = this.resource + '--start'
    var end = this.resource + '--end'
    return (
        '\n' +
        'try { window.performance.mark(\'' + start + '\') } catch (e) {};\n' +
        content + '\n' +
        'try { window.performance.mark(\'' + end + '\');\n' +
        'window.performance.measure(\'' + this.resource + '\', \'' + start + '\', \'' + end + '\')\n' +
        '} catch (e) {};'
    )
}
