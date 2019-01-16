/**
 * Service for challenge resource processor.
 */
const _ = require('lodash')
const Joi = require('joi')
const logger = require('../common/logger')
const config = require('config')
const axios = require('axios')

/**
 * Update another kafka though email topic
 * @param {Object} message the message
 */
async function updateEmail (message) {

  logger.info(`Successfully updated challenge details of id ${challengeId} in Elasticsearch.`)
}

/**
 * Handle Kafka message of 'create submission'.
 * @param {Object} message the message
 */
async function createSubmission (message) {
  // update another kafka through email topic
  await updateEmail(message)
  logger.info('Submission created')
}

createSubmission.schema = {
  message: Joi.object().keys({
    topic: Joi.string().required(),
    originator: Joi.string().required(),
    timestamp: Joi.date().required(),
    'mime-type': Joi.string().required(),
    payload: Joi.object().keys({
      resource: Joi.string().valid('submission').required(),
      id : Joi.string().required()
        }).unknown(true).required()
  }).required()
}


// Exports
module.exports = {
  createSubmission
}

logger.buildService(module.exports)
