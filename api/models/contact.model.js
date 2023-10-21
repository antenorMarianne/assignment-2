module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // DEFINE YOUR MODEL HERE
        name: {   // This is the new "contact name" column
            type: Sequelize.STRING,
            allowNull: false,   // This makes the column NOT NULL
            validate: {
                notEmpty: true,  // This makes sure the string is not empty
            }
        }
    });
  
    return Contact;
};