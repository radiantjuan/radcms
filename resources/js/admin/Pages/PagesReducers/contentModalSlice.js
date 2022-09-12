import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    content_types_settings: {
        row: {
            settings: [
                {
                    id: 'backgroundImage',
                    type: 'file',
                    label: 'Background image'
                },
                {
                    id: 'additionalClassNames',
                    type: 'text',
                    value: '',
                    label: 'Additional class names',
                    placeholder: 'Enter class names (e.g. class1 class2 class3)',
                },
                {
                    id: 'elementId',
                    type: 'text',
                    label: 'Element ID',
                    placeholder: 'Enter element ID'
                }
            ],
            settings_values: {}
        },
        column: {
            settings: [
                {
                    id: 'columnSizeSelect',
                    type: 'select',
                    value: '',
                    label: 'Size',
                    placeholder: 'Select column size',
                    options: [
                        {value: 1, label: 1},
                        {value: 2, label: 2},
                        {value: 3, label: 3},
                        {value: 4, label: 4},
                        {value: 5, label: 5},
                        {value: 6, label: 6},
                        {value: 7, label: 7},
                        {value: 8, label: 8},
                        {value: 9, label: 9},
                        {value: 10, label: 10},
                        {value: 11, label: 11},
                        {value: 12, label: 12}
                    ]
                },
                {
                    id: 'backgroundImage',
                    type: 'file',
                    value: '',
                    label: 'Background image'
                },
                {
                    id: 'additionalClassNames',
                    type: 'text',
                    value: '',
                    label: 'Additional class names',
                    placeholder: 'Enter class names (e.g. class1 class2 class3)'
                },
                {
                    id: 'elementId',
                    type: 'text',
                    value: '',
                    label: 'Element ID',
                    placeholder: 'Enter element ID'
                }
            ],
            settings_values: {}
        }
    },
}

export const contentModalSlice = createSlice({
    name: 'contentModal',
    initialState,
    reducers: {
        populateFieldValues(state, action) {
            const mutate_state = state;
            mutate_state.content_types_settings[action.payload.content_type].settings_values[action.payload.id] = action.payload.value;
            return mutate_state
        },
        removeFieldValues(state, action) {
            const mutate_state = state;
            mutate_state.content_types_settings[action.payload].settings_values = {};
            return mutate_state
        }
    },
})

// Action creators are generated for each case reducer function
export const {populateFieldValues, removeFieldValues} = contentModalSlice.actions

export default contentModalSlice.reducer
