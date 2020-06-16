// Do not edit, this file was generated by github.com/apex/rpc.

// Token represents an API token.
interface Token {
  // id is the token.
  id?: string

  // description is the description of the token.
  description?: string

  // scopes is available to this token, permitting access to read and write data.
  scopes: string[]

  // last_used_at is a timestamp indicating when the token was last used.
  last_used_at?: Date

  // created_at is a timestamp indicating when the token was created.
  created_at?: Date
}

// Alert represents configuration for performing alerting.
interface Alert {
  // id is the alert id.
  id: string

  // project_id is the associated project id.
  project_id: string

  // name is the name of the alert.
  name: string

  // description is the description of the alert.
  description: string

  // severity is the severity of the alert. Must be one of: "info", "notice", "error", "critical".
  severity: string

  // query is the query performed by the alert.
  query: string

  // operator is the operator used when comparing against the threshold. Must be one of: ">", ">=", "<", "<=".
  operator: string

  // threshold is the threshold for comparison against the selected operator.
  threshold: number

  // limit is the maximum number of events in the alert notification.
  limit: number

  // interval is the interval in minutes for performing the alert.
  interval: number

  // notification_id is the notification id for reporting alerts, when omitted the alert will not be run.
  notification_id: string

  // triggered is a boolean indicating whether or not the alert is currently triggered.
  triggered: boolean

  // muted is a boolean used ignore trigger and resolve notifications.
  muted: boolean

  // updated_at is a timestamp indicating when the alert was last updated.
  updated_at: Date

  // created_at is a timestamp indicating when the alert was created.
  created_at: Date
}

// InstanceConfig represents an instance's configuration.
interface InstanceConfig {
  // team_id is the Apex team id.
  team_id?: string

  // project_id is the Google Cloud project id.
  project_id?: string

  // region is the Google Cloud region id.
  region?: string
}

// Search represents a saved search query.
interface Search {
  // id is the saved search id.
  id: string

  // name is the name of the saved search.
  name: string

  // project_id is the associated project id.
  project_id: string

  // query is the saved search query.
  query: string

  // updated_at is a timestamp indicating when the saved search was last updated.
  updated_at: Date

  // created_at is a timestamp indicating when the saved search was created.
  created_at: Date
}

// DiscoveredField represents a single discovered field.
interface DiscoveredField {
  // name is the field name.
  name: string

  // type is the type of discovered field. Must be one of: "string", "number", "boolean".
  type: string

  // count is the number of times this field occurred in the sampled events.
  count: number

  // percent is the percentage of occurrences in the sampled events.
  percent: number
}

// StringFieldStat represents a string field's stats.
interface StringFieldStat {
  // value is the string value.
  value: string

  // count is the number of times this field occurred in the sampled events.
  count: number

  // percent is the percentage of occurrences in the sampled events.
  percent: number
}

// BooleanFieldStat represents a boolean field's stats.
interface BooleanFieldStat {
  // value is the boolean value.
  value: boolean

  // count is the number of times this field occurred in the sampled events.
  count: number

  // percent is the percentage of occurrences in the sampled events.
  percent: number
}

// Project represents a customer application.
interface Project {
  // id is the project id.
  id: string

  // name is the human-friendly project name.
  name: string

  // retention is the retention of log events in days. When zero the logs do not expire.
  retention: number

  // location is the geographical location where the log events are stored. Must be one of: "us-west2", "northamerica-northeast1", "us-east4", "southamerica-east1", "europe-north1", "europe-west2", "europe-west6", "asia-east2", "asia-south1", "asia-northeast2", "asia-east1", "asia-northeast1", "asia-southeast1", "australia-southeast1".
  location: string

  // description is the project description.
  description?: string

  // updated_at is a timestamp indicating when the project was last updated.
  updated_at: Date

  // created_at is a timestamp indicating when the project was created.
  created_at: Date
}

// Notification represents an alert notification.
interface Notification {
  // id is the notification id.
  id: string

  // project_id is the associated project id.
  project_id: string

  // name is the name of the notification.
  name: string

  // type is the type of notification. Must be one of: "slack", "pagerduty", "email", "sms", "webhook".
  type: string

  // slack_webhook_url is the Slack webhook URL.
  slack_webhook_url?: string

  // slack_channel is the Slack channel name, otherwise the default for the webhook is used.
  slack_channel?: string

  // webhook_url is the webhook URL which receives the alert payloads.
  webhook_url?: string

  // sms_numbers is the receipients of the alert notifications.
  sms_numbers?: string[]

  // email_addresses is the receipients of the alert notifications.
  email_addresses?: string[]

  // pagerduty_service_key is the PagerDuty service key.
  pagerduty_service_key?: string

  // updated_at is a timestamp indicating when the notification was last updated.
  updated_at: Date

  // created_at is a timestamp indicating when the notification was created.
  created_at: Date
}

// Event represents a single log event.
interface Event {
  // id is the event id.
  id: string

  // level is the severity level. Must be one of: "debug", "info", "notice", "warning", "error", "critical", "alert", "emergency".
  level: string

  // message is the log message.
  message: string

  // fields is the log fields.
  fields?: object

  // timestamp is the creation timestamp.
  timestamp: Date
}

// QueryStats represents query statistics.
interface QueryStats {
  // total_bytes_processed is the total number of bytes processed by the query.
  total_bytes_processed: number

  // total_bytes_billed is the total number of bytes billed by the query.
  total_bytes_billed: number

  // cache_hit is a boolean indicating if the query was cached.
  cache_hit: boolean

  // duration is the query duration in milliseconds.
  duration: number
}

// TimeseriesPoint represents a single point in a timeseries query.
interface TimeseriesPoint {
  // timestamp is the bucket timestamp.
  timestamp: Date

  // count is the number of events for this bucket.
  count: number
}

// AddAlertInput params.
interface AddAlertInput {
  // alert is the alert.
  alert: Alert
}

// AddAlertOutput params.
class AddAlertOutput {
  // id is the alert id.
  id: string
}

// AddEventsInput params.
interface AddEventsInput {
  // events is the batch of events.
  events: Event[]

  // project_id is the project id.
  project_id: string
}

// AddNotificationInput params.
interface AddNotificationInput {
  // notification is the notification.
  notification: Notification
}

// AddNotificationOutput params.
class AddNotificationOutput {
  // id is the notification id.
  id: string
}

// AddProjectInput params.
interface AddProjectInput {
  // project is the project.
  project: Project
}

// AddProjectOutput params.
class AddProjectOutput {
  // id is the project id.
  id: string
}

// AddSearchInput params.
interface AddSearchInput {
  // search is the saved search.
  search: Search
}

// AddSearchOutput params.
class AddSearchOutput {
  // id is the saved search id.
  id: string
}

// AddTokenInput params.
interface AddTokenInput {
  // token is the token.
  token: Token
}

// AddTokenOutput params.
class AddTokenOutput {
  // id is the token id.
  id?: string
}

// GetAlertInput params.
interface GetAlertInput {
  // alert_id is the alert id.
  alert_id: string

  // project_id is the project id.
  project_id: string
}

// GetAlertOutput params.
class GetAlertOutput {
  // alert is the alert.
  alert: Alert
}

// GetAlertsInput params.
interface GetAlertsInput {
  // project_id is the project id.
  project_id: string
}

// GetAlertsOutput params.
class GetAlertsOutput {
  // alerts is the alerts.
  alerts: Alert[]
}

// GetBooleanFieldStatsInput params.
interface GetBooleanFieldStatsInput {
  // field is the field name.
  field: string

  // project_id is the project id.
  project_id: string

  // query is the search query string.
  query?: string

  // start is the start timestamp, events before this time are not included.
  start: Date

  // stop is the stop timestamp, events after this time are not included.
  stop: Date

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// GetBooleanFieldStatsOutput params.
class GetBooleanFieldStatsOutput {
  // stats is the query statistics.
  stats: QueryStats

  // values is the boolean values.
  values: BooleanFieldStat[]
}

// GetCountInput params.
interface GetCountInput {
  // project_id is the project id.
  project_id: string

  // query is the search query string.
  query?: string

  // start is the start timestamp, events before this time are not included.
  start: Date

  // stop is the stop timestamp, events after this time are not included.
  stop: Date

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// GetCountOutput params.
class GetCountOutput {
  // count is the query result count.
  count: number

  // stats is the query statistics.
  stats: QueryStats
}

// GetDiscoveredFieldsInput params.
interface GetDiscoveredFieldsInput {
  // project_id is the project id.
  project_id: string

  // query is the search query string.
  query?: string

  // start is the start timestamp, events before this time are not included.
  start: Date

  // stop is the stop timestamp, events after this time are not included.
  stop: Date

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// GetDiscoveredFieldsOutput params.
class GetDiscoveredFieldsOutput {
  // fields is the fields discovered.
  fields: DiscoveredField[]

  // stats is the query statistics.
  stats: QueryStats
}

// GetInstanceConfigOutput params.
class GetInstanceConfigOutput {
  // config is the instance configuration.
  config?: InstanceConfig
}

// GetNotificationInput params.
interface GetNotificationInput {
  // notification_id is the notification id.
  notification_id: string

  // project_id is the project id.
  project_id: string
}

// GetNotificationOutput params.
class GetNotificationOutput {
  // notification is the notification.
  notification: Notification
}

// GetNotificationsInput params.
interface GetNotificationsInput {
  // project_id is the project id.
  project_id: string
}

// GetNotificationsOutput params.
class GetNotificationsOutput {
  // notifications is the notifications.
  notifications: Notification[]
}

// GetNumericFieldStatsInput params.
interface GetNumericFieldStatsInput {
  // field is the field name.
  field: string

  // project_id is the project id.
  project_id: string

  // query is the search query string.
  query?: string

  // start is the start timestamp, events before this time are not included.
  start: Date

  // stop is the stop timestamp, events after this time are not included.
  stop: Date

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// GetNumericFieldStatsOutput params.
class GetNumericFieldStatsOutput {
  // avg is the avg value.
  avg: number

  // max is The max value.
  max: number

  // min is the min value.
  min: number

  // stats is the query statistics.
  stats: QueryStats
}

// GetProjectStatsInput params.
interface GetProjectStatsInput {
  // project_id is the project id.
  project_id: string
}

// GetProjectStatsOutput params.
class GetProjectStatsOutput {
  // bytes_total is the total number of bytes stored.
  bytes_total: number

  // events_total is the total number of events stored.
  events_total: number
}

// GetProjectsOutput params.
class GetProjectsOutput {
  // projects is the projects.
  projects: Project[]
}

// GetSearchesInput params.
interface GetSearchesInput {
  // project_id is the project id.
  project_id: string
}

// GetSearchesOutput params.
class GetSearchesOutput {
  // searches is the saved searches.
  searches?: Search[]
}

// GetStringFieldStatsInput params.
interface GetStringFieldStatsInput {
  // field is the field name.
  field: string

  // limit is the maximum number of values to return.
  limit: number

  // project_id is the project id.
  project_id: string

  // query is the search query string.
  query?: string

  // start is the start timestamp, events before this time are not included.
  start: Date

  // stop is the stop timestamp, events after this time are not included.
  stop: Date

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// GetStringFieldStatsOutput params.
class GetStringFieldStatsOutput {
  // stats is the query statistics.
  stats: QueryStats

  // values is the string values.
  values: StringFieldStat[]
}

// GetTimeseriesInput params.
interface GetTimeseriesInput {
  // max_points is the maxmimum number of datapoints to return.
  max_points: number

  // project_id is the project id.
  project_id: string

  // query is the search query string.
  query?: string

  // start is the start timestamp, events before this time are not included.
  start: Date

  // stop is the stop timestamp, events after this time are not included.
  stop: Date

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// GetTimeseriesOutput params.
class GetTimeseriesOutput {
  // points is the series.
  points: TimeseriesPoint[]

  // stats is the query statistics.
  stats: QueryStats
}

// GetTokensOutput params.
class GetTokensOutput {
  // tokens is the tokens.
  tokens?: Token[]
}

// QueryInput params.
interface QueryInput {
  // project_id is the project id.
  project_id: string

  // query is the SQL query string.
  query: string

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// QueryOutput params.
class QueryOutput {
  // results is the query results.
  results: object[]

  // stats is the query statistics.
  stats: QueryStats
}

// RemoveAlertInput params.
interface RemoveAlertInput {
  // alert_id is the alert id.
  alert_id: string

  // project_id is the project id.
  project_id: string
}

// RemoveNotificationInput params.
interface RemoveNotificationInput {
  // notification_id is the notification id.
  notification_id: string

  // project_id is the project id.
  project_id: string
}

// RemoveProjectInput params.
interface RemoveProjectInput {
  // project_id is the project id.
  project_id: string
}

// RemoveSearchInput params.
interface RemoveSearchInput {
  // project_id is the project id.
  project_id: string

  // search_id is the saved search id.
  search_id: string
}

// RemoveTokenInput params.
interface RemoveTokenInput {
  // token_id is the token id.
  token_id: string
}

// SearchInput params.
interface SearchInput {
  // limit is the maxmimum number of events to return.
  limit: number

  // order is the query timestamp sort order. Must be one of: "ascending", "descending".
  order?: string

  // project_id is the project id.
  project_id: string

  // query is the search query string.
  query?: string

  // start is the start timestamp, events before this time are not included.
  start: Date

  // stop is the stop timestamp, events after this time are not included.
  stop: Date

  // timeout is a request timeout in seconds, after which a timeout error is returned.
  timeout: number
}

// SearchOutput params.
class SearchOutput {
  // results is the query results.
  results: object[]

  // stats is the query statistics.
  stats: QueryStats
}

// TestAlertInput params.
interface TestAlertInput {
  // alert is the alert.
  alert: Alert
}

// UpdateAlertInput params.
interface UpdateAlertInput {
  // alert is the alert.
  alert: Alert
}

// UpdateNotificationInput params.
interface UpdateNotificationInput {
  // notification is the notification.
  notification: Notification
}

// UpdateProjectInput params.
interface UpdateProjectInput {
  // project is the project.
  project: Project
}

// UpdateSearchInput params.
interface UpdateSearchInput {
  // search is the saved search.
  search: Search
}


import fetch from 'node-fetch'

/**
 * Call method with params via a POST request.
 */

async function call(url: string, authToken: string, method: string, params?: any): Promise<string> {
  const res = await fetch(url + '/' + method, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })

  // we have an error, try to parse a well-formed json
  // error response, otherwise default to status code
  if (res.status >= 300) {
    let err
    try {
      const { type, message } = await res.json()
      err = new Error(message)
      err.type = type
    } catch {
      err = new Error(`${res.status} ${res.statusText}`)
    }
    throw err
  }

  return res.text()
}


/**
 * Client is the API client.
 */

export class Client {

  private url: string
  private authToken: string

  /**
   * Initialize.
   */

  constructor(params: { url: string, authToken?: string }) {
    this.url = params.url
    this.authToken = params.authToken
  }

  /**
   * addAlert: creates a new alert.
   */

  async addAlert(params: AddAlertInput): Promise<AddAlertOutput> {
    let res = await call(this.url, this.authToken, 'add_alert', params)
    let out: AddAlertOutput = JSON.parse(res)
    return out
  }

  /**
   * addEvents: ingests a batch of events.
   */

  async addEvents(params: AddEventsInput) {
    await call(this.url, this.authToken, 'add_events', params)
  }

  /**
   * addNotification: creates a new notification.
   */

  async addNotification(params: AddNotificationInput): Promise<AddNotificationOutput> {
    let res = await call(this.url, this.authToken, 'add_notification', params)
    let out: AddNotificationOutput = JSON.parse(res)
    return out
  }

  /**
   * addProject: creates a new project.
   */

  async addProject(params: AddProjectInput): Promise<AddProjectOutput> {
    let res = await call(this.url, this.authToken, 'add_project', params)
    let out: AddProjectOutput = JSON.parse(res)
    return out
  }

  /**
   * addSearch: creates a new saved search.
   */

  async addSearch(params: AddSearchInput): Promise<AddSearchOutput> {
    let res = await call(this.url, this.authToken, 'add_search', params)
    let out: AddSearchOutput = JSON.parse(res)
    return out
  }

  /**
   * addToken: creates a new token.
   */

  async addToken(params: AddTokenInput): Promise<AddTokenOutput> {
    let res = await call(this.url, this.authToken, 'add_token', params)
    let out: AddTokenOutput = JSON.parse(res)
    return out
  }

  /**
   * getAlert: returns an alert.
   */

  async getAlert(params: GetAlertInput): Promise<GetAlertOutput> {
    let res = await call(this.url, this.authToken, 'get_alert', params)
    let out: GetAlertOutput = JSON.parse(res)
    return out
  }

  /**
   * getAlerts: returns all alerts in a project.
   */

  async getAlerts(params: GetAlertsInput): Promise<GetAlertsOutput> {
    let res = await call(this.url, this.authToken, 'get_alerts', params)
    let out: GetAlertsOutput = JSON.parse(res)
    return out
  }

  /**
   * getBooleanFieldStats: returns field statistics for a boolean field.
   */

  async getBooleanFieldStats(params: GetBooleanFieldStatsInput): Promise<GetBooleanFieldStatsOutput> {
    let res = await call(this.url, this.authToken, 'get_boolean_field_stats', params)
    let out: GetBooleanFieldStatsOutput = JSON.parse(res)
    return out
  }

  /**
   * getCount: performs a search query against the log events, returning the number of matches.
   */

  async getCount(params: GetCountInput): Promise<GetCountOutput> {
    let res = await call(this.url, this.authToken, 'get_count', params)
    let out: GetCountOutput = JSON.parse(res)
    return out
  }

  /**
   * getDiscoveredFields: returns fields discovered in the provided time range.
   */

  async getDiscoveredFields(params: GetDiscoveredFieldsInput): Promise<GetDiscoveredFieldsOutput> {
    let res = await call(this.url, this.authToken, 'get_discovered_fields', params)
    let out: GetDiscoveredFieldsOutput = JSON.parse(res)
    return out
  }

  /**
   * getInstanceConfig: returns instance configuration.
   */

  async getInstanceConfig(): Promise<GetInstanceConfigOutput> {
    let res = await call(this.url, this.authToken, 'get_instance_config')
    let out: GetInstanceConfigOutput = JSON.parse(res)
    return out
  }

  /**
   * getNotification: returns a notification.
   */

  async getNotification(params: GetNotificationInput): Promise<GetNotificationOutput> {
    let res = await call(this.url, this.authToken, 'get_notification', params)
    let out: GetNotificationOutput = JSON.parse(res)
    return out
  }

  /**
   * getNotifications: returns all notifications.
   */

  async getNotifications(params: GetNotificationsInput): Promise<GetNotificationsOutput> {
    let res = await call(this.url, this.authToken, 'get_notifications', params)
    let out: GetNotificationsOutput = JSON.parse(res)
    return out
  }

  /**
   * getNumericFieldStats: returns field statistics for a numeric field.
   */

  async getNumericFieldStats(params: GetNumericFieldStatsInput): Promise<GetNumericFieldStatsOutput> {
    let res = await call(this.url, this.authToken, 'get_numeric_field_stats', params)
    let out: GetNumericFieldStatsOutput = JSON.parse(res)
    return out
  }

  /**
   * getProjectStats: returns project statistics.
   */

  async getProjectStats(params: GetProjectStatsInput): Promise<GetProjectStatsOutput> {
    let res = await call(this.url, this.authToken, 'get_project_stats', params)
    let out: GetProjectStatsOutput = JSON.parse(res)
    return out
  }

  /**
   * getProjects: returns all projects.
   */

  async getProjects(): Promise<GetProjectsOutput> {
    let res = await call(this.url, this.authToken, 'get_projects')
    let out: GetProjectsOutput = JSON.parse(res)
    return out
  }

  /**
   * getSearches: returns all saved searches in a project.
   */

  async getSearches(params: GetSearchesInput): Promise<GetSearchesOutput> {
    let res = await call(this.url, this.authToken, 'get_searches', params)
    let out: GetSearchesOutput = JSON.parse(res)
    return out
  }

  /**
   * getStringFieldStats: returns field statistics for a string field.
   */

  async getStringFieldStats(params: GetStringFieldStatsInput): Promise<GetStringFieldStatsOutput> {
    let res = await call(this.url, this.authToken, 'get_string_field_stats', params)
    let out: GetStringFieldStatsOutput = JSON.parse(res)
    return out
  }

  /**
   * getTimeseries: returns a timeseries of event counts in the provided time range.
   */

  async getTimeseries(params: GetTimeseriesInput): Promise<GetTimeseriesOutput> {
    let res = await call(this.url, this.authToken, 'get_timeseries', params)
    let out: GetTimeseriesOutput = JSON.parse(res)
    return out
  }

  /**
   * getTokens: returns all tokens.
   */

  async getTokens(): Promise<GetTokensOutput> {
    let res = await call(this.url, this.authToken, 'get_tokens')
    let out: GetTokensOutput = JSON.parse(res)
    return out
  }

  /**
   * query: performs a SQL query against the log events.
   */

  async query(params: QueryInput): Promise<QueryOutput> {
    let res = await call(this.url, this.authToken, 'query', params)
    let out: QueryOutput = JSON.parse(res)
    return out
  }

  /**
   * removeAlert: removes an alert.
   */

  async removeAlert(params: RemoveAlertInput) {
    await call(this.url, this.authToken, 'remove_alert', params)
  }

  /**
   * removeNotification: removes a notification.
   */

  async removeNotification(params: RemoveNotificationInput) {
    await call(this.url, this.authToken, 'remove_notification', params)
  }

  /**
   * removeProject: removes a project.
   */

  async removeProject(params: RemoveProjectInput) {
    await call(this.url, this.authToken, 'remove_project', params)
  }

  /**
   * removeSearch: removes a saved search.
   */

  async removeSearch(params: RemoveSearchInput) {
    await call(this.url, this.authToken, 'remove_search', params)
  }

  /**
   * removeToken: removes a token.
   */

  async removeToken(params: RemoveTokenInput) {
    await call(this.url, this.authToken, 'remove_token', params)
  }

  /**
   * search: performs a search query against the log events.
   */

  async search(params: SearchInput): Promise<SearchOutput> {
    let res = await call(this.url, this.authToken, 'search', params)
    let out: SearchOutput = JSON.parse(res)
    return out
  }

  /**
   * testAlert: test the alert configuration.
   */

  async testAlert(params: TestAlertInput) {
    await call(this.url, this.authToken, 'test_alert', params)
  }

  /**
   * updateAlert: updates an alert.
   */

  async updateAlert(params: UpdateAlertInput) {
    await call(this.url, this.authToken, 'update_alert', params)
  }

  /**
   * updateNotification: updates a notification.
   */

  async updateNotification(params: UpdateNotificationInput) {
    await call(this.url, this.authToken, 'update_notification', params)
  }

  /**
   * updateProject: updates a project.
   */

  async updateProject(params: UpdateProjectInput) {
    await call(this.url, this.authToken, 'update_project', params)
  }

  /**
   * updateSearch: updates a saved search.
   */

  async updateSearch(params: UpdateSearchInput) {
    await call(this.url, this.authToken, 'update_search', params)
  }

}
