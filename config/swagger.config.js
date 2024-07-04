import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        info: {
            title: 'MonkeyReading API',
            version: '1.0.0',
            description: 'MonkeyReading API 설명'
        },
        host: 'MonkeyReading-env.eba-n87vfqmg.ap-northeast-2.elasticbeanstalk.com',
        basepath: '../'
    },
    apis: ['./src/routes/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);
