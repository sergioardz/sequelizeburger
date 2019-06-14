module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            //Burger name cannot be null validation
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            // A burger's devoured status is false by default
            defaultValue: false
        }
    }, {
        freezeTableName: true,
    });
    return Burger;
};