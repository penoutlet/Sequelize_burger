module.exports = function (sequelize, DataTypes){
	var burger = sequelize.define("burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false
			},
		devoured: DataTypes.BOOLEAN

		},
		{
		timestamps: false
		});
	return burger;
};



