 

import { useState } from "react"
import {
  Box,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  InputAdornment,
  Paper,
  Button,
  Divider,
  useTheme,
} from "@mui/material"
import { Search, FilterList, Clear } from "@mui/icons-material"

const ProductFilter = ({ onFilterChange }) => {
  const theme = useTheme()
  const [priceRange, setPriceRange] = useState([30000, 100000])
  const [rangeFilter, setRangeFilter] = useState([200, 650])
  const [searchQuery, setSearchQuery] = useState("")
  const [vehicleTypes, setVehicleTypes] = useState({
    sedan: false,
    suv: false,
    sports: false,
    compact: false,
  })
  const [features, setFeatures] = useState({
    autopilot: false,
    premium: false,
    performance: false,
    longRange: false,
  })

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue)
  }

  const handleRangeChange = (event, newValue) => {
    setRangeFilter(newValue)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleVehicleTypeChange = (event) => {
    setVehicleTypes({
      ...vehicleTypes,
      [event.target.name]: event.target.checked,
    })
  }

  const handleFeatureChange = (event) => {
    setFeatures({
      ...features,
      [event.target.name]: event.target.checked,
    })
  }

  const handleApplyFilters = () => {
    onFilterChange({
      priceRange,
      rangeFilter,
      searchQuery,
      vehicleTypes,
      features,
    })
  }

  const handleResetFilters = () => {
    setPriceRange([30000, 100000])
    setRangeFilter([200, 650])
    setSearchQuery("")
    setVehicleTypes({
      sedan: false,
      suv: false,
      sports: false,
      compact: false,
    })
    setFeatures({
      autopilot: false,
      premium: false,
      performance: false,
      longRange: false,
    })

    onFilterChange({
      priceRange: [30000, 100000],
      rangeFilter: [200, 650],
      searchQuery: "",
      vehicleTypes: {
        sedan: false,
        suv: false,
        sports: false,
        compact: false,
      },
      features: {
        autopilot: false,
        premium: false,
        performance: false,
        longRange: false,
      },
    })
  }

  return (
    <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" component="h2" sx={{ display: "flex", alignItems: "center" }}>
          <FilterList sx={{ mr: 1 }} />
          Filter Products
        </Typography>
        <Button size="small" startIcon={<Clear />} onClick={handleResetFilters}>
          Reset
        </Button>
      </Box>

      <TextField
        fullWidth
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={20000}
        max={150000}
        step={5000}
        valueLabelFormat={(value) => `$${value.toLocaleString()}`}
        sx={{ mb: 4 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          ${priceRange[0].toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${priceRange[1].toLocaleString()}
        </Typography>
      </Box>

      <Typography variant="subtitle1" gutterBottom>
        Range (miles)
      </Typography>
      <Slider
        value={rangeFilter}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        min={100}
        max={700}
        step={50}
        valueLabelFormat={(value) => `${value} mi`}
        sx={{ mb: 4 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {rangeFilter[0]} miles
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rangeFilter[1]} miles
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" gutterBottom>
        Vehicle Type
      </Typography>
      <FormGroup sx={{ mb: 3 }}>
        <FormControlLabel
          control={<Checkbox checked={vehicleTypes.sedan} onChange={handleVehicleTypeChange} name="sedan" />}
          label="Sedan"
        />
        <FormControlLabel
          control={<Checkbox checked={vehicleTypes.suv} onChange={handleVehicleTypeChange} name="suv" />}
          label="SUV"
        />
        <FormControlLabel
          control={<Checkbox checked={vehicleTypes.sports} onChange={handleVehicleTypeChange} name="sports" />}
          label="Sports"
        />
        <FormControlLabel
          control={<Checkbox checked={vehicleTypes.compact} onChange={handleVehicleTypeChange} name="compact" />}
          label="Compact"
        />
      </FormGroup>

      <Typography variant="subtitle1" gutterBottom>
        Features
      </Typography>
      <FormGroup sx={{ mb: 3 }}>
        <FormControlLabel
          control={<Checkbox checked={features.autopilot} onChange={handleFeatureChange} name="autopilot" />}
          label="Autopilot"
        />
        <FormControlLabel
          control={<Checkbox checked={features.premium} onChange={handleFeatureChange} name="premium" />}
          label="Premium Interior"
        />
        <FormControlLabel
          control={<Checkbox checked={features.performance} onChange={handleFeatureChange} name="performance" />}
          label="Performance Package"
        />
        <FormControlLabel
          control={<Checkbox checked={features.longRange} onChange={handleFeatureChange} name="longRange" />}
          label="Long Range Battery"
        />
      </FormGroup>

      <Button variant="contained" color="primary" fullWidth onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </Paper>
  )
}

export default ProductFilter

