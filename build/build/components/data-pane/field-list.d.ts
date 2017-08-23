/// <reference types="react" />
import { Schema } from 'compassql/build/src/schema';
import * as React from 'react';
import { FilterAction } from '../../actions';
import { DatasetSchemaChangeFieldType } from '../../actions/dataset';
import { ActionHandler } from '../../actions/redux-action';
import { SpecFieldAutoAdd } from '../../actions/shelf';
import { ShelfFieldDef } from '../../models/shelf';
export interface FieldListProps extends ActionHandler<SpecFieldAutoAdd | DatasetSchemaChangeFieldType | FilterAction> {
    fieldDefs: ShelfFieldDef[];
    schema: Schema;
}
export declare const FieldList: React.ComponentClass<{}>;
export declare const PresetWildcardFieldList: React.ComponentClass<{}>;