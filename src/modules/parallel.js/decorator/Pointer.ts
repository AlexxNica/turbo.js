import {DataType} from "../types/DataType";
import {Compiler} from "../compiler/Compiler";
/**
 * Created by Nidin Vinayakan on 24/6/2016.
 */
export function Pointer(parameters:{type:DataType, source:any, members:any}) {

    switch (parameters.type){
        case DataType.Class:return Compiler.compileClass(parameters);
        case DataType.Structure:return Compiler.compileStructure(parameters);
    }
}