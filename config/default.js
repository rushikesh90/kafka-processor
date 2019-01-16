/**
 * The default configuration file.
 */

module.exports = {
  DISABLE_LOGGING: process.env.DISABLE_LOGGING || false, // If true, logging will be disabled
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

  KAFKA_URL: process.env.KAFKA_URL || 'localhost:9092',

  KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID || 'tc-challenge-submission-processor-group',
  // below are used for secure Kafka connection, they are optional
  // for the local Kafka, they are not needed
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY,

  RESOURCE_TOPIC: process.env.CREATE_SUBMISSION_TOPIC || 'submission.notification.create' ,
  REGISTRATION_TOPIC: process.env.UPDATE_SUBMISSION_TOPIC || 'submission.notification.update',

  UPDATE_ES_CHALLENGE_DETAILS_URL: process.env.UPDATE_ES_CHALLENGE_DETAILS_URL ||
    'https://api.topcoder-dev.com/v4/esfeeder/challenges'
}
