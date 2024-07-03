export interface Topics {
    name: string;
    subs: string[];
}

export const initialTopics: Topics[] = [
    { name: 'Components', subs: ['Independent', 'Reusable'] },
    { name: 'Rendering', subs: ['VDOM'] },
    { name: 'Hooks', subs: ['useState', 'useEffect', 'useContext', 'useReducer', 'useMemo', 'useCallback'] },
    { name: 'Facebook', subs: ['Library'] },
    { name: 'Refs', subs: ['Managing focus'] },
    { name: 'JSX', subs: ['Not HTML', 'Camel Case', 'Curly Braces'] },
    { name: 'Effects', subs: ['Side effects management'] },
    { name: 'Context', subs: ['Provider', 'Consumer'] },
    { name: 'Props', subs: ['Composition', 'Key props'] },
    { name: 'Events', subs: ['onClick', 'onChange', 'onSubmit'] },
    { name: 'Fragments', subs: [] },
    { name: 'State', subs: ['Manage Data'] },
    { name: 'VDOM', subs: ['Diffing', 'Reconciliation', 'Batch Update'] },
    { name: 'FSD', subs: ['Layers', 'Slices', 'Segments'] },
];