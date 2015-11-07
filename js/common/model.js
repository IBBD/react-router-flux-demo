/**
 * 数据操作基本类
 * @author Alex
 */

module.exports = new Object({

    // 数据存储的地方
    // 下标是主键
    table: {},

    // 唯一键
    id: null,

    /**
     * 初始化
     * 可以指定各个字段的类型
     * @param {Object} config
     */
    init: function(config) {
        ;
    },

    isExists: function(id) {
        if ('undefined' === typeof this.table[id]) {
            return false;
        }
        return true;
    },

    add: function(id, row) {
        if (this.isExists(id)) {
            return false;
        }
        this.table[id] = row;
        return true;
    },

    edit: function(id, row) {
        if (false === this.isExists(id)) {
            return false;
        }
        this.table[id] = row;
        return true;
    },

    remove: function(id) {
        if (false === this.isExists(id)) {
            return false;
        }
        delete this.table[id];
        return true;
    },

    findAll: function() {
        return this.table;
    },

    findOne: function(id) {
        if (false === this.isExists(id)) {
            return false;
        }
        return this.table[id];
    },

    query: function(params) {
        if ('object' !== typeof params) {
            return false;
        }

        var rows = {};
        for (key in this.table) {
            ;
        }
        return rows;
    }
});
