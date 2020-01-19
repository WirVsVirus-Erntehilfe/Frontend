export interface DashboardState {
    testDashboardVal: string,
    dashboardIsLoading: boolean,
    requestedData: any,
};

export const initialDashboardState: DashboardState = {
    testDashboardVal: 'Initial dashboard val',
    dashboardIsLoading: true,
    requestedData: undefined,
}

