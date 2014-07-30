function Alarm (_id) {
    this.id = _id;
    this.tipo = "geo";
    this.latitude = "";
    this.longitude = "";
    
    this.getTemporada = function()
    {
        if(this.fechaInicio < this.FECHA_INICIO_TEMP_ALTA || this.fechaInicio > this.FECHA_FIN_TEMP_ALTA)
            return "Baja";
        else
            return "Alta";
    };
}