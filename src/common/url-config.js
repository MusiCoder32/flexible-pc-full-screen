module.exports = {
    login:'api/Auth/Login',
    first:'api/Home/GetHomeStatistics',
    coal:'api/Mine/GetMineStatistics',
    chemical:'api/HazardChemical/GetHazardChemicalStatistics',
    start:{
        line:'api/BDSatellite/GetBdSensorListByOrgId',
        types:'api/BDSatellite/GetSensBdSensorMenus',
        sensorData:'api/BDSatellite/GetChartData',
    },
};
