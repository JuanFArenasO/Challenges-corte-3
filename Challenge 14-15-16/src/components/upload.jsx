import React, { useEffect } from "react";
import { useUploadHook } from "../hooks/useUpload";

export function Upload() {
    const [
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
        handleRemove
     ] = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, []);

    return (
        <div>
            <input type="file" onChange={handleChange} name="archivo" />
            <button onClick={handleUpload}>Cargando al Firebase</button>
            <button onClick={handleRemove}>Removido del Firebase</button>
            <p>{percent} "% hecho</p>
            {
                files.map((item, key) => {
                    return <img width="100px" src={item} key={key} />
                })
            }
        </div>
    )
}