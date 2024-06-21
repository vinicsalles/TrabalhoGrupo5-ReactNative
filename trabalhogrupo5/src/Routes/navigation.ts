import { ParametrosRota } from './StackRoutes';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends ParametrosRota {}
    }
}