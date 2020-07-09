interface Alert {
    created_at?: Date;
    description?: string;
    id?: string;
    interval?: number;
    limit?: number;
    muted?: boolean;
    name: string;
    notification_id: string;
    operator: string;
    project_id: string;
    query: string;
    severity: string;
    threshold?: number;
    updated_at?: Date;
}
interface BooleanFieldStat {
    count?: number;
    percent?: number;
    value?: boolean;
}
interface DiscoveredField {
    count?: number;
    name?: string;
    percent?: number;
    type?: string;
}
interface Event {
    fields?: object;
    id?: string;
    level: string;
    message: string;
    timestamp?: Date;
}
interface InstanceConfig {
    project_id?: string;
    region?: string;
    team_id?: string;
}
interface Notification {
    created_at?: Date;
    email_addresses?: string[];
    id?: string;
    name: string;
    pagerduty_service_key?: string;
    project_id: string;
    slack_channel?: string;
    slack_webhook_url?: string;
    sms_numbers?: string[];
    type: string;
    updated_at?: Date;
    webhook_url?: string;
}
interface Project {
    created_at?: Date;
    description?: string;
    id?: string;
    location: string;
    name: string;
    retention?: number;
    updated_at?: Date;
}
interface QueryStats {
    cache_hit?: boolean;
    duration?: number;
    total_bytes_billed?: number;
    total_bytes_processed?: number;
}
interface Search {
    created_at?: Date;
    id?: string;
    name: string;
    project_id: string;
    query: string;
    updated_at?: Date;
}
interface StringFieldStat {
    count?: number;
    percent?: number;
    value?: string;
}
interface TimeseriesPoint {
    count?: number;
    timestamp?: Date;
}
interface Token {
    created_at?: Date;
    description?: string;
    id?: string;
    last_used_at?: Date;
    scopes: string[];
}
interface AddAlertInput {
    alert: Alert;
}
interface AddAlertOutput {
    id: string;
}
interface AddEventsInput {
    events: Event[];
    project_id: string;
}
interface AddNotificationInput {
    notification: Notification;
}
interface AddNotificationOutput {
    id: string;
}
interface AddProjectInput {
    project: Project;
}
interface AddProjectOutput {
    id: string;
}
interface AddSearchInput {
    search: Search;
}
interface AddSearchOutput {
    id: string;
}
interface AddTokenInput {
    token: Token;
}
interface AddTokenOutput {
    id?: string;
}
interface GetAlertInput {
    alert_id: string;
    project_id: string;
}
interface GetAlertOutput {
    alert: Alert;
}
interface GetAlertsInput {
    project_id: string;
}
interface GetAlertsOutput {
    alerts: Alert[];
}
interface GetBooleanFieldStatsInput {
    field: string;
    project_id: string;
    query?: string;
    start: Date;
    stop: Date;
}
interface GetBooleanFieldStatsOutput {
    stats: QueryStats;
    values: BooleanFieldStat[];
}
interface GetCountInput {
    project_id: string;
    query?: string;
    start: Date;
    stop: Date;
}
interface GetCountOutput {
    count: number;
    stats: QueryStats;
}
interface GetDiscoveredFieldsInput {
    project_id: string;
    query?: string;
    start: Date;
    stop: Date;
}
interface GetDiscoveredFieldsOutput {
    fields: DiscoveredField[];
    stats: QueryStats;
}
interface GetInstanceConfigOutput {
    config?: InstanceConfig;
}
interface GetNotificationInput {
    notification_id: string;
    project_id: string;
}
interface GetNotificationOutput {
    notification: Notification;
}
interface GetNotificationsInput {
    project_id: string;
}
interface GetNotificationsOutput {
    notifications: Notification[];
}
interface GetNumericFieldStatsInput {
    field: string;
    project_id: string;
    query?: string;
    start: Date;
    stop: Date;
}
interface GetNumericFieldStatsOutput {
    avg: number;
    max: number;
    min: number;
    stats: QueryStats;
}
interface GetProjectStatsInput {
    project_id: string;
}
interface GetProjectStatsOutput {
    bytes_total: number;
    events_total: number;
}
interface GetProjectsOutput {
    projects: Project[];
}
interface GetSearchesInput {
    project_id: string;
}
interface GetSearchesOutput {
    searches?: Search[];
}
interface GetStringFieldStatsInput {
    field: string;
    limit?: number;
    project_id: string;
    query?: string;
    start: Date;
    stop: Date;
}
interface GetStringFieldStatsOutput {
    stats: QueryStats;
    values: StringFieldStat[];
}
interface GetTimeseriesInput {
    max_points: number;
    project_id: string;
    query?: string;
    start: Date;
    stop: Date;
}
interface GetTimeseriesOutput {
    points: TimeseriesPoint[];
    stats: QueryStats;
}
interface GetTokensOutput {
    tokens?: Token[];
}
interface QueryInput {
    project_id: string;
    query: string;
}
interface QueryOutput {
    results: object[];
    stats: QueryStats;
}
interface RemoveAlertInput {
    alert_id: string;
    project_id: string;
}
interface RemoveNotificationInput {
    notification_id: string;
    project_id: string;
}
interface RemoveProjectInput {
    project_id: string;
}
interface RemoveSearchInput {
    project_id: string;
    search_id: string;
}
interface RemoveTokenInput {
    token_id: string;
}
interface SearchInput {
    limit?: number;
    order?: string;
    project_id: string;
    query?: string;
    start: Date;
    stop: Date;
}
interface SearchOutput {
    events: Event[];
    stats: QueryStats;
}
interface TestAlertInput {
    alert: Alert;
}
interface UpdateAlertInput {
    alert: Alert;
}
interface UpdateNotificationInput {
    notification: Notification;
}
interface UpdateProjectInput {
    project: Project;
}
interface UpdateSearchInput {
    search: Search;
}
/**
 * Client is the API client.
 */
export declare class Client {
    private url;
    private authToken;
    /**
     * Initialize.
     */
    constructor(params: {
        url: string;
        authToken?: string;
    });
    /**
     * Decoder is used as the reviver parameter when decoding responses.
     */
    private decoder;
    /**
     * addAlert: creates a new alert.
     */
    addAlert(params: AddAlertInput): Promise<AddAlertOutput>;
    /**
     * addEvents: ingests a batch of events.
     */
    addEvents(params: AddEventsInput): Promise<void>;
    /**
     * addNotification: creates a new notification.
     */
    addNotification(params: AddNotificationInput): Promise<AddNotificationOutput>;
    /**
     * addProject: creates a new project.
     */
    addProject(params: AddProjectInput): Promise<AddProjectOutput>;
    /**
     * addSearch: creates a new saved search.
     */
    addSearch(params: AddSearchInput): Promise<AddSearchOutput>;
    /**
     * addToken: creates a new token.
     */
    addToken(params: AddTokenInput): Promise<AddTokenOutput>;
    /**
     * getAlert: returns an alert.
     */
    getAlert(params: GetAlertInput): Promise<GetAlertOutput>;
    /**
     * getAlerts: returns all alerts in a project.
     */
    getAlerts(params: GetAlertsInput): Promise<GetAlertsOutput>;
    /**
     * getBooleanFieldStats: returns field statistics for a boolean field.
     */
    getBooleanFieldStats(params: GetBooleanFieldStatsInput): Promise<GetBooleanFieldStatsOutput>;
    /**
     * getCount: performs a search query against the log events, returning the number of matches.
     */
    getCount(params: GetCountInput): Promise<GetCountOutput>;
    /**
     * getDiscoveredFields: returns fields discovered in the provided time range.
     */
    getDiscoveredFields(params: GetDiscoveredFieldsInput): Promise<GetDiscoveredFieldsOutput>;
    /**
     * getInstanceConfig: returns instance configuration.
     */
    getInstanceConfig(): Promise<GetInstanceConfigOutput>;
    /**
     * getNotification: returns a notification.
     */
    getNotification(params: GetNotificationInput): Promise<GetNotificationOutput>;
    /**
     * getNotifications: returns all notifications.
     */
    getNotifications(params: GetNotificationsInput): Promise<GetNotificationsOutput>;
    /**
     * getNumericFieldStats: returns field statistics for a numeric field.
     */
    getNumericFieldStats(params: GetNumericFieldStatsInput): Promise<GetNumericFieldStatsOutput>;
    /**
     * getProjectStats: returns project statistics.
     */
    getProjectStats(params: GetProjectStatsInput): Promise<GetProjectStatsOutput>;
    /**
     * getProjects: returns all projects.
     */
    getProjects(): Promise<GetProjectsOutput>;
    /**
     * getSearches: returns all saved searches in a project.
     */
    getSearches(params: GetSearchesInput): Promise<GetSearchesOutput>;
    /**
     * getStringFieldStats: returns field statistics for a string field.
     */
    getStringFieldStats(params: GetStringFieldStatsInput): Promise<GetStringFieldStatsOutput>;
    /**
     * getTimeseries: returns a timeseries of event counts in the provided time range.
     */
    getTimeseries(params: GetTimeseriesInput): Promise<GetTimeseriesOutput>;
    /**
     * getTokens: returns all tokens.
     */
    getTokens(): Promise<GetTokensOutput>;
    /**
     * query: performs a SQL query against the log events.
     */
    query(params: QueryInput): Promise<QueryOutput>;
    /**
     * removeAlert: removes an alert.
     */
    removeAlert(params: RemoveAlertInput): Promise<void>;
    /**
     * removeNotification: removes a notification.
     */
    removeNotification(params: RemoveNotificationInput): Promise<void>;
    /**
     * removeProject: removes a project.
     */
    removeProject(params: RemoveProjectInput): Promise<void>;
    /**
     * removeSearch: removes a saved search.
     */
    removeSearch(params: RemoveSearchInput): Promise<void>;
    /**
     * removeToken: removes a token.
     */
    removeToken(params: RemoveTokenInput): Promise<void>;
    /**
     * search: performs a search query against the log events.
     */
    search(params: SearchInput): Promise<SearchOutput>;
    /**
     * testAlert: test the alert configuration.
     */
    testAlert(params: TestAlertInput): Promise<void>;
    /**
     * updateAlert: updates an alert.
     */
    updateAlert(params: UpdateAlertInput): Promise<void>;
    /**
     * updateNotification: updates a notification.
     */
    updateNotification(params: UpdateNotificationInput): Promise<void>;
    /**
     * updateProject: updates a project.
     */
    updateProject(params: UpdateProjectInput): Promise<void>;
    /**
     * updateSearch: updates a saved search.
     */
    updateSearch(params: UpdateSearchInput): Promise<void>;
}
export {};
