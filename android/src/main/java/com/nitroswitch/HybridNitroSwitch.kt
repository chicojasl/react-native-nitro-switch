package com.nitroswitch

import android.content.res.ColorStateList
import android.view.ViewGroup
import android.widget.LinearLayout
import androidx.annotation.Keep
import com.facebook.proguard.annotations.DoNotStrip
import com.facebook.react.uimanager.ThemedReactContext
import com.google.android.material.materialswitch.MaterialSwitch
import com.margelo.nitro.nitroswitch.HybridNitroSwitchSpec
import com.facebook.react.bridge.ColorPropConverter
import com.margelo.nitro.nitroswitch.Variant_Double_ColorProp

@Keep
@DoNotStrip
class HybridNitroSwitch(val context: ThemedReactContext): HybridNitroSwitchSpec() {
    private val materialSwitch = MaterialSwitch(context).apply {
        text = ""
        textOn = ""
        textOff = ""
        layoutParams = LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.WRAP_CONTENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        )
    }

    private val defaultThumbTintList = materialSwitch.thumbTintList
    private val defaultTrackTintList = materialSwitch.trackTintList
    private val defaultDecorationTintList = materialSwitch.trackDecorationTintList

    // View

    override val view = materialSwitch

    // Props

    override var value: Boolean = false
        set(value) {
            field = value
            materialSwitch.isChecked = value
        }

    override var disabled: Boolean? = false
        get() = field
        set(value) {
            field = value
            materialSwitch.isEnabled = value != true
        }

    override var trackColor: Variant_Double_ColorProp? = null
        get() = field
        set(value) {
            field = value
            val colorStateList = value?.let { getColorStateListGivenColorProp(value) }
            materialSwitch.trackTintList = colorStateList ?: defaultTrackTintList
        }

    override var thumbColor: Variant_Double_ColorProp? = null
        get() = field
        set(value) {
            field = value
            val colorStateList = value?.let { getColorStateListGivenColorProp(value) }
            materialSwitch.thumbTintList = colorStateList ?: defaultThumbTintList
        }

    override var trackDecorationColor: Variant_Double_ColorProp? = null
        get() = field
        set(value) {
            field = value
            val colorStateList = value?.let { getColorStateListGivenColorProp(value) }
            materialSwitch.trackDecorationTintList = colorStateList ?: defaultDecorationTintList
        }

    override var onValueChange: ((value: Boolean) -> Unit)? = null
        set(cb) {
            materialSwitch.setOnCheckedChangeListener { p0, isChecked ->
                if (isChecked != value) {
                    value = isChecked
                    cb?.invoke(isChecked)
                }
            }
        }

    private fun convertColor (color: Double): Int {
        return try {
            ColorPropConverter.getColor(color, context) ?:0
        } catch (e: Exception) {
            0xFF000000.toInt() // fallback black
        }
    }

    private fun getColorStateListGivenColorProp (value: Variant_Double_ColorProp): ColorStateList {
        return value.match(
            first = { hex ->
                ColorStateList.valueOf(convertColor(hex))
            },
            second = { colorProp ->
                val onColor = convertColor(colorProp.on)
                val offColor = convertColor(colorProp.off)

                val states = arrayOf(
                    intArrayOf(android.R.attr.state_checked),
                    intArrayOf(-android.R.attr.state_checked)
                )
                ColorStateList(states, intArrayOf(onColor, offColor))
            }
        )
    }
}
